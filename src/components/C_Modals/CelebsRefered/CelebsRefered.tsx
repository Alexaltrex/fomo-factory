import style from "./CelebsRefered.module.scss"
import {observer} from "mobx-react-lite";
import {useStore} from "../../../store/rootStore";
import {FC, useRef} from "react";
import {useOutsideClick} from "../../../hooks/useOutsideClick";
import {svgIcons} from "../../../assets/svgIcons";
import {IconButton} from "../../_common/IconButton/IconButton";
import {ButtonCustom, VariantEnum} from "../../_common/ButtonCustom/ButtonCustom";

interface ICelebsRefered {
    celebsReferedModal: boolean
    setCelebsReferedModal: (value: boolean) => void
}

export const CelebsRefered: FC<ICelebsRefered> = ({
                                                               celebsReferedModal, setCelebsReferedModal
                                                           }) => {


    const ref = useRef<HTMLDivElement>(null!);
    const onClose = () => setCelebsReferedModal(false);
    useOutsideClick(ref, onClose);

    return (
        <>
            {
                celebsReferedModal && (
                    <div className={style.celebsRefered}>
                        <div className={style.card}
                             ref={ref}
                        >

                            <div className={style.cardHeader}>
                                <div className={style.cardHeaderLeft}>
                                    {svgIcons.link}
                                    <span>Celebs refered</span>
                                </div>
                                <IconButton icon={svgIcons.close}
                                            className={style.closeBtn}
                                            onClick={onClose}
                                />
                            </div>

                            <div className={style.list}>
                                {
                                    Array
                                        .from(({length: 25}), (v, k) => k)
                                        .map(key => ({
                                            name: `CELEB ${key + 1}`,
                                            value: "100,00 SOL"
                                        }))
                                    .map(({name, value}, key) => (
                                        <div key={key}
                                             className={style.row}
                                        >
                                            <p>{name}</p>
                                            <p>{value}</p>
                                        </div>
                                    ))
                                }
                            </div>


                            <ButtonCustom label="CLOSE"
                                          onClick={onClose}
                                          className={style.closeBottomBtn}
                                          variant={VariantEnum.contained}
                            />
                        </div>
                    </div>
                )
            }
        </>
    )
}