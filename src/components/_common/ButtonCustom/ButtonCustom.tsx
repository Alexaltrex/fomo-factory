import style from "./ButtonCustom.module.scss";
import {FC, useState} from "react";
import {clsx} from "clsx";
import {ColorThemeEnum} from "../../../store/appStore";
import {observer} from "mobx-react-lite";
import {useStore} from "../../../store/rootStore";

export enum VariantEnum {
    outlined = "outlined",
    contained = "contained"

}

interface IButtonOutlined extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    label: string
    variant?: VariantEnum
    className?: string
}

export const ButtonCustom: FC<IButtonOutlined> = observer(({
                                                      label,
                                                      variant = VariantEnum.outlined,
                                                      className,
                                                      ...props
                                                  }) => {
    const {
        appStore: {
            colorTheme
        }
    } = useStore();


    const [mouseDown, setMouseDown] = useState(false);
    const onMouseDown = () => setMouseDown(true);
    const onMouseUp = () => setMouseDown(false);

    return (
        <button className={clsx(
            {
                [style.buttonCustom]: true,
                [style.buttonCustom_outlined_dark]: variant === VariantEnum.outlined && colorTheme === ColorThemeEnum.dark,
                [style.buttonCustom_outlined_dark_mouseDown]: variant === VariantEnum.outlined && colorTheme === ColorThemeEnum.dark && mouseDown,

                [style.buttonCustom_contained_dark]: variant === VariantEnum.contained && colorTheme === ColorThemeEnum.dark,
                [style.buttonCustom_contained_dark_mouseDown]: variant === VariantEnum.contained && colorTheme === ColorThemeEnum.dark && mouseDown,

                // [style.buttonCustom_light]: colorTheme === ColorThemeEnum.light,
                // [style.buttonCustom_contained_light]: variant === VariantEnum.contained && colorTheme === ColorThemeEnum.light,

            },
            Boolean(className) && className
        )}
                {...props}
                onMouseDown={onMouseDown}
                onMouseUp={onMouseUp}
        >
            <span>{label}</span>
        </button>
    )
})