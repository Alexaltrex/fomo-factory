import style from "./PageNotFound.module.scss"
import {svgIcons} from "../../assets/svgIcons";
import {ButtonCustom, VariantEnum} from "../_common/ButtonCustom/ButtonCustom";
import {useNavigate} from "react-router-dom";

export const PageNotFound = () => {
    const navigate = useNavigate();


    return (
        <div className={style.pageNotFound}>
            {svgIcons.pageNotFound}
            <h2 className={style.title}>
                Error 404
            </h2>
            <p className={style.subtitle}>
                Page not found
            </p>

            <ButtonCustom label="BACK TO HOME PAGE"
                          variant={VariantEnum.contained}
                          className={style.backBtn}
                          onClick={() => navigate("/")}
            />
        </div>
    )
}