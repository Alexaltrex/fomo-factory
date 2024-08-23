import {observer} from "mobx-react-lite";
import {useStore} from "../../../store/rootStore";
import style from "./Share.module.scss";
import {clsx} from "clsx";
import {ColorThemeEnum} from "../../../store/appStore";
import {IconButton} from "../../_common/IconButton/IconButton";
import {svgIcons} from "../../../assets/svgIcons";
import {useRef, useState} from "react";
import {useOutsideClick} from "../../../hooks/useOutsideClick";

export const Share = observer(() => {
    const {
        appStore: {
            colorTheme,
            shareModal, setShareModal,
        }
    } = useStore();

    const onClose = () => setShareModal(false);

    const link = "https://referal-fomofactory.com"

    const [copied, setCopied] = useState(false);

    const onCopy = async () => {
        await navigator.clipboard.writeText(link);
        if (!copied) {
            setCopied(true);
            const timer = setTimeout(() => setCopied(false), 3000);
        }
    }

    const ref = useRef<HTMLDivElement>(null!);
    useOutsideClick(ref, () => setShareModal(false));

    return (
        <>
            {
                shareModal && (
                    <div className={clsx({
                        [style.share]: true,
                        [style.share_light]: colorTheme === ColorThemeEnum.light,
                    })}>
                        <div className={style.card}
                             ref={ref}
                        >
                            <div className={style.cardHeader}>
                                <div className={style.cardHeaderLeft}>
                                    {svgIcons.link}
                                    <span>Share</span>
                                </div>
                                <IconButton icon={svgIcons.close}
                                            className={style.closeBtn}
                                            onClick={onClose}
                                />
                            </div>
                            <p className={style.description}>
                                Use this referral link to onboard celebrity and get 1 percent
                            </p>
                            <div className={style.cardFooter}>
                                <div className={style.left}>
                                    <div className={style.iconWrapper}>
                                        {svgIcons.share}
                                    </div>
                                    <p className={style.link}>{link}</p>
                                </div>
                                <IconButton icon={copied ? svgIcons.check : svgIcons.copy}
                                            className={clsx({
                                                [style.copyBtn]: true,
                                                [style.copyBtn_copied]: copied,
                                            })}
                                            onClick={onCopy}
                                />
                            </div>
                        </div>
                    </div>
                )
            }
        </>


    )
})