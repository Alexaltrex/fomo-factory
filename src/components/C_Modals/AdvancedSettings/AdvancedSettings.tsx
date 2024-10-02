import style from "./AdvancedSettings.module.scss";
import {FC, useRef, useState} from "react";
import {useOutsideClick} from "../../../hooks/useOutsideClick";
import {svgIcons} from "../../../assets/svgIcons";
import {IconButton} from "../../_common/IconButton/IconButton";
import {clsx} from "clsx";
import {Slippage} from "./Slippage/Slippage";
import {SmartMEVProtection} from "./SmartMEVProtection/SmartMEVProtection";
import {PriorityFee} from "./PriorityFee/PriorityFee";
import {Customize} from "./Customize/Customize";
import {ButtonCustom, VariantEnum} from "../../_common/ButtonCustom/ButtonCustom";
import {Tabs} from "../../_common/Tabs/Tabs";

interface IAdvancedSettings {
    showModal: boolean
    onClose: () => void
    onSave: () => void
}

export const AdvancedSettings: FC<IAdvancedSettings> = ({
                                                            showModal,
                                                            onClose,
                                                            onSave,
                                                        }) => {

    const ref = useRef<HTMLDivElement>(null!);
    useOutsideClick(ref, () => onClose());
    const [tab, setTab] = useState(0)

    const address = "Jb8j9N32X120kd98sKMbz2j"
    const [copied, setCopied] = useState(false);
    const onCopy = async () => {
        if (!copied) {
            setCopied(true);
            await navigator.clipboard.writeText(address);
            setTimeout(() => setCopied(false), 3000);
        }
    }
    const onSaveHandler = () => {
        onSave();
        onClose();
    }

    return (
        <>
            {
                showModal && (
                    <div className={style.advancedSettings}>
                        <div className={style.card}
                             ref={ref}
                        >

                            <div className={style.cardHeader}>
                                <div className={style.cardHeaderLeft}>
                                    {svgIcons.cog}
                                    <span>Advanced Settings</span>
                                </div>
                                <IconButton icon={svgIcons.close}
                                            className={style.closeBtn}
                                            onClick={onClose}
                                />
                            </div>

                            <Tabs tabs={["QUICK BUY", "QUICK SELL"]}
                                  tab={tab}
                                  onClick={tab => setTab(tab)}
                                  className={style.tabs}
                            />

                            <div className={style.addressSection}>
                                <div className={style.left}>
                                    <div className={style.icon}>
                                        {svgIcons.wallet}
                                    </div>
                                    <p>Jb8j9N32X120kd98sKMbz2j</p>
                                </div>
                                <IconButton icon={copied ? svgIcons.check : svgIcons.copy2}
                                            className={clsx({
                                                [style.copyBtn]: true,
                                                [style.copyBtn_copied]: copied,
                                            })}
                                            onClick={onCopy}
                                />
                            </div>

                            <Slippage/>
                            <SmartMEVProtection/>
                            <PriorityFee/>
                            <Customize/>

                            <ButtonCustom label="save"
                                          className={style.saveBtn}
                                          variant={VariantEnum.contained}
                                          onClick={onSaveHandler}
                            />

                        </div>
                    </div>
                )
            }
        </>

    )
}