import {FC, useRef} from "react";
import style from "./Tweet.module.scss";
import {useOutsideClick} from "../../../hooks/useOutsideClick";
import {svgIcons} from "../../../assets/svgIcons";
import {IconButton} from "../../_common/IconButton/IconButton";
import {ButtonCustom, VariantEnum} from "../../_common/ButtonCustom/ButtonCustom";

interface ITweet {
    show: boolean
    onClose: () => void
}

export const Tweet: FC<ITweet> = ({
                                      show, onClose
                                  }) => {
    const ref = useRef<HTMLDivElement>(null!);
    useOutsideClick(ref, onClose);


    return (
        <>
            {
                show && (
                    <div className={style.tweet}>
                        <div className={style.card}
                             ref={ref}
                        >

                            <div className={style.cardHeader}>
                                <div className={style.cardHeaderLeft}>
                                    {svgIcons.x_outlined}
                                    <span>TWEET</span>
                                </div>
                                <IconButton icon={svgIcons.close}
                                            className={style.closeBtn}
                                            onClick={onClose}
                                />
                            </div>

                            <div className={style.body}>
                                {
                                    [
                                        {
                                            label: "Entry price: ",
                                            value: "0.10 sol",
                                        },
                                        {
                                            label: "Current price: ",
                                            value: "0.20 sol",
                                        },
                                        {
                                            label: "Total profit: ",
                                            value: "0.5 sol",
                                        },
                                    ].map(({label, value}, key) => (
                                        <p key={key}>
                                            <span>{label}</span><span>{value}</span>
                                        </p>
                                    ))
                                }
                            </div>

                            <ButtonCustom label="TWEET"
                                          variant={VariantEnum.contained}
                                          className={style.btn}
                            />

                        </div>
                    </div>
                )
            }
        </>
    )
}