import {svgIcons} from "../../../../assets/svgIcons";
import style from "./StarButton.module.scss"
import {FC, useState} from "react";
import {clsx} from "clsx";
import {ViewModeEnum} from "../../../../store/appStore";

interface IStarButton {
    viewMode?: ViewModeEnum
}


export const StarButton: FC<IStarButton> = ({
                                                viewMode = ViewModeEnum.list
                                            }) => {
    const [selected, setSelected] = useState(false)

    return (
        <button className={clsx({
            [style.starButton]: true,
            [style.starButton_grid]: viewMode === ViewModeEnum.grid,
            [style.starButton_selected]: selected,
        })}
                onClick={() => setSelected(true)}
        >
            {svgIcons.star_unselect}
        </button>
    )
}