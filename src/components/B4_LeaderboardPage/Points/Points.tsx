import style from "./Points.module.scss"
import {points} from "../data";
import {ButtonCustom, VariantEnum} from "../../_common/ButtonCustom/ButtonCustom";
import {Tabs} from "../../_common/Tabs/Tabs";

export const Points = () => {
    return (
        <div className={style.points}>

            <div className={style.header}>
                {
                    ["Points", "PTS", "Referred"].map((label, key) => (
                        <p key={key}>
                            {label}
                        </p>
                    ))
                }
            </div>

            <div className={style.list}>
                {
                    points.map(({src, value, pts, referred}, key) => (
                        <div key={key}
                             className={style.item}
                        >
                            <div>
                                <img src={src} alt=""/>
                                <p>{value}</p>
                            </div>
                            <div>
                                <p>{`${pts} PTS`}</p>
                            </div>
                            <div>
                                <p>{referred}</p>
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