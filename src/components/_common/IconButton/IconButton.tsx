import style from "./IconButton.module.scss"
import React, {FC, useState} from "react";
import {clsx} from "clsx";
import {ColorThemeEnum} from "../../../store/appStore";
import {useStore} from "../../../store/rootStore";
import {observer} from "mobx-react-lite";

interface IIconButton extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    icon: JSX.Element,
    className?: string
}

export const IconButton: FC<IIconButton> = observer(({
                                                icon,
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
                [style.iconButton]: true,
                [style.iconButton_dark]: colorTheme === ColorThemeEnum.dark,
                [style.iconButton_dark_mouseDown]: colorTheme === ColorThemeEnum.dark && mouseDown,
                [style.iconButton_light]: colorTheme === ColorThemeEnum.light,
                [style.iconButton_light_mouseDown]: colorTheme === ColorThemeEnum.light && mouseDown,
            },
            Boolean(className) && className,
        )}
                onMouseDown={onMouseDown}
                onMouseUp={onMouseUp}
                {...props}
        >
            {icon}
        </button>
    )
})