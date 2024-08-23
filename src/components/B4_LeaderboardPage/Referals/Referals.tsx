import style from "./Referals.module.scss"
import {referals} from "../data";
import {ButtonCustom, VariantEnum} from "../../_common/ButtonCustom/ButtonCustom";

export const Referals = () => {
    return (
        <div className={style.referals}>
            <div className={style.header}>
                <p>
                    Points
                </p>
                <p>
                    PTS
                </p>
            </div>

            <div className={style.list}>
                {
                    referals.map(({src, value, sol}, key) => (
                        <div key={key}
                             className={style.item}
                        >
                            <div className={style.left}>
                                <img src={src} alt=""/>
                                <p>{value}</p>
                            </div>
                            <div className={style.right}>
                                <p>{`${sol} SOL`}</p>
                            </div>
                        </div>
                    ))
                }
            </div>

            <ButtonCustom label="MY REFERALS"
                          className={style.btn}
                          variant={VariantEnum.contained}
            />
        </div>
    )
}