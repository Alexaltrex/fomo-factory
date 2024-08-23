import style from "./ColorThemeSwitcher.module.scss"
import {observer} from "mobx-react-lite";
import {useStore} from "../../../store/rootStore";
import {ColorThemeEnum} from "../../../store/appStore";
import {clsx} from "clsx";
import {svgIcons} from "../../../assets/svgIcons";

export const ColorThemeSwitcher = observer(() => {
    const {
        appStore: {
            colorTheme, setColorTheme
        }
    } = useStore();

    const onClick = () => {
        setColorTheme(colorTheme === ColorThemeEnum.light ? ColorThemeEnum.dark : ColorThemeEnum.light)
    }

    return (
        <button className={clsx({
            [style.colorThemeSwitcher]: true,
            [style.colorThemeSwitcher_light]: colorTheme === ColorThemeEnum.light
        })}
                onClick={onClick}
        >
            {svgIcons.sun}

            <p className={style.labelDark}>DARK</p>

            <div className={style.switcher}/>

            <p className={style.labelLight}>WHITE</p>


        </button>
    )
})