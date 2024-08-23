import {FC, useRef} from "react";
import style from "./EnableInsta.module.scss";
import {svgIcons} from "../../../assets/svgIcons";
import {IconButton} from "../../_common/IconButton/IconButton";
import {ButtonCustom, VariantEnum} from "../../_common/ButtonCustom/ButtonCustom";
import {useOutsideClick} from "../../../hooks/useOutsideClick";

interface IEnableInsta {
    label: string
    showModal: boolean
    onClose: () => void
    onConfirm: () => void
}


export const EnableInsta: FC<IEnableInsta> = ({
                                                  label,
                                                  showModal,
                                                  onClose,
                                                  onConfirm,
                                              }) => {

    const ref = useRef<HTMLDivElement>(null!);
    useOutsideClick(ref, () => onClose());

    return (
        <>
            {
                showModal && (
                    <div className={style.enableInsta}>
                        <div className={style.card}
                             ref={ref}
                        >

                            <div className={style.cardHeader}>
                                <div className={style.cardHeaderLeft}>
                                    {svgIcons.tag}
                                    <span>{label}</span>
                                </div>
                                <IconButton icon={svgIcons.close}
                                            className={style.closeBtn}
                                            onClick={onClose}
                                />
                            </div>
                            <p className={style.description}>
                                After enabling this option, the default purchase amount will be based on your last
                                transaction
                            </p>

                            <div className={style.footer}>
                                <ButtonCustom label="Cancel"
                                              variant={VariantEnum.outlined}
                                              onClick={onClose}
                                />
                                <ButtonCustom label="Confirm"
                                              variant={VariantEnum.contained}
                                              onClick={() => {
                                                  onConfirm();
                                                  onClose();
                                              }}
                                />
                            </div>

                        </div>
                    </div>
                )
            }
        </>

    )
}