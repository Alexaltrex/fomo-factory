import style from "./Section.module.scss"
import {svgIcons} from "../../assets/svgIcons";
import src from "../../assets/png/0.png"

export const Section = () => {
    return (
        <div className={style.section}>
            <h2 className={style.title}>
                {svgIcons.logo_full}
            </h2>

            <div className={style.infoSection}>
                <img src={src} alt=""/>
                <div className={style.info}>
                    <p>
                        <span>Billie</span>
                        {svgIcons.check_green}
                    </p>
                    <p>@Billie_ailish</p>
                </div>
            </div>

            <p className={style.genesis}>
                GEnesis member
            </p>

            <p className={style.genesisValue}>
                4x more ✦FP
            </p>

            <p className={style.codeLabel}>
                Code:
            </p>

            <div className={style.codeValue}>
                {
                    "ABC123".split("").map((letter, key) => (
                        <p key={key}
                           className={style.letter}
                        >
                            {letter}
                        </p>
                    ))
                }
            </div>

            <div className={style.fomofactory}>
                <p>fomofactory.io</p>
            </div>

        </div>
    )
}