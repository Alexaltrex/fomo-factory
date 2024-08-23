import {observer} from "mobx-react-lite";
import {useStore} from "../../../store/rootStore";
import {useRef, useState} from "react";
import {useOutsideButNotOnTargetClick} from "../../../hooks/useOutsideClick";
import style from "./Notifications.module.scss";
import {svgIcons} from "../../../assets/svgIcons";
import {clsx} from "clsx";
import {IconButton} from "../../_common/IconButton/IconButton";
import {ColorThemeEnum} from "../../../store/appStore";
import {notifications} from "./data";

export const Notifications = observer(() => {
    const {
        appStore: {
            colorTheme
        }
    } = useStore();

    const [showMenu, setShowMenu] = useState(false);
    const ref = useRef<HTMLDivElement>(null!);
    const targetRef = useRef<HTMLDivElement>(null!);
    useOutsideButNotOnTargetClick(ref, targetRef, () => setShowMenu(false))


    return (
        <div className={style.notifications}
             ref={ref}
        >
            <div className={style.refWrapper}
                 ref={targetRef}
            >
                <IconButton icon={svgIcons.bell}
                            className={clsx({
                                [style.btn]: true,
                                [style.btn_light]: colorTheme === ColorThemeEnum.light,
                                [style.btn_hasNew]: true,
                            })}
                            onClick={() => setShowMenu(!showMenu)}

                />
            </div>

            {
                showMenu && (
                    <div className={style.dropdown}>
                        <div className={style.dropdownHeader}>
                            <p>Notifications</p>
                            <button>
                                <span>View all</span>
                            </button>
                        </div>
                        <div className={style.dropdownBody}>
                            {
                                notifications.map(({
                                                       icon,
                                                       title,
                                                       time,
                                                       description
                                                   }, key) => (
                                    <div key={key} className={style.item}>
                                        <div className={style.itemHeader}>
                                            <div className={style.left}>
                                                {icon}<p>{title}</p>
                                            </div>
                                            <p>{time}</p>
                                        </div>
                                        <p className={style.description}>
                                            {description}
                                        </p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                )

            }

        </div>
    )
})