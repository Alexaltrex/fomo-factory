import style from "./ViewModeSwitcher.module.scss";
import {svgIcons} from "../../../assets/svgIcons";
import {ColorThemeEnum, ViewModeEnum} from "../../../store/appStore";
import {observer} from "mobx-react-lite";
import {useStore} from "../../../store/rootStore";
import {clsx} from "clsx";
import {useWindowSize} from "@uidotdev/usehooks";
import {useEffect} from "react";

export const ViewModeSwitcher = observer(() => {
    const {
        appStore: {
            viewMode, setViewMode,
            colorTheme
        }
    } = useStore();

    const size = useWindowSize();

    useEffect(() => {
       if (size && size.width && size.width >= 1440 ) {
           setViewMode(ViewModeEnum.list)
       }
        if (size && size.width && size.width < 1440 ) {
            setViewMode(ViewModeEnum.grid)
        }
    }, [size])

    return (
        <div className={clsx({
            [style.viewModeSwitcher]: true,
            [style.viewModeSwitcher_light]: colorTheme === ColorThemeEnum.light,
        })}>
            {
                [
                    {
                        icon: svgIcons.list,
                        _viewMode: ViewModeEnum.list
                    },
                    {
                        icon: svgIcons.grid3,
                        _viewMode: ViewModeEnum.grid
                    },
                ].map(({icon, _viewMode}, key) => (
                    <button key={key}
                            className={clsx({
                                [style.btn]: true,
                                [style.btn_selected]: _viewMode === viewMode,
                            })}
                            onClick={() => setViewMode(_viewMode)}
                    >
                        {icon}
                    </button>

                ))
            }
        </div>
    )
})