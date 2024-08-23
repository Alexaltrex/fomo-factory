import style from "./Points.module.scss"
import {points} from "../data";
import {ButtonCustom, VariantEnum} from "../../_common/ButtonCustom/ButtonCustom";

export const Points = () => {
    return (
        <div className={style.points}>
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
                    points.map(({src, value, pts}, key) => (
                        <div key={key}
                             className={style.item}
                        >
                            <div className={style.left}>
                                <img src={src} alt=""/>
                                <p>{value}</p>
                            </div>
                            <div className={style.right}>
                                <p>{`${pts} PTS`}</p>
                            </div>
                        </div>
                    ))
                }
            </div>

            <ButtonCustom label="MY POINTS"
                          className={style.btn}
                          variant={VariantEnum.contained}
            />
        </div>
    )
}