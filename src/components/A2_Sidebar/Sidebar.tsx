import style from "./Sidebar.module.scss"
import {svgIcons} from "../../assets/svgIcons";
import React from "react";
import {IconButton} from "../_common/IconButton/IconButton";
import {useLocation, useNavigate} from "react-router-dom";
import {clsx} from "clsx";
import {observer} from "mobx-react-lite";
import {useStore} from "../../store/rootStore";
import {FavoriteSingle} from "./FavoriteSingle/FavoriteSingle";
import {FavoriteFolder} from "./FavoriteFolder/FavoriteFolder";
import {HTML5Backend} from "react-dnd-html5-backend";
import {DndProvider} from "react-dnd";

export const Sidebar = observer(() => {
    const {
        appStore: {
            setHowToPlayModal,
            favoriteSingles,
            favoriteFolders,
        }
    } = useStore();

    const navigate = useNavigate();

    const {pathname} = useLocation();

    return (
            <div className={style.sidebar}>

                <div className={style.favorites}>

                    <div className={style.singles}>
                        {
                            favoriteSingles.map((favoriteSingle, key) => (
                                <FavoriteSingle key={favoriteSingle.id}
                                                favoriteSingle={favoriteSingle}
                                />
                            ))
                        }
                    </div>

                    <div className={style.folders}>
                        {
                            favoriteFolders.map((favoriteFolder) => (
                                <FavoriteFolder key={favoriteFolder.id}
                                                favoriteFolder={favoriteFolder}
                                />
                            ))
                        }
                    </div>

                </div>

                <div className={style.links}>
                    {
                        [
                            {
                                icon: svgIcons.grid2,
                                onClick: () => navigate("/"),
                                to: "/"
                            },
                            {
                                icon: svgIcons.trophy,
                                onClick: () => navigate("/leaderboard"),
                                to: "/leaderboard"
                            },
                            {
                                icon: svgIcons.light_bulb,
                                onClick: () => setHowToPlayModal(true),
                                to: "",
                            },
                            {
                                icon: svgIcons.copy,
                                onClick: () => navigate("/docs"),
                                to: "",
                            },
                            {
                                icon: svgIcons.user,
                                onClick: () => navigate("/profile"),
                                to: "/profile",
                            },
                        ].map(({icon, onClick, to}, key) => (
                            <IconButton key={key}
                                        icon={icon}
                                        className={clsx({
                                            [style.link]: true,
                                            [style.link_selected]: (key === 0 || key === 1) && pathname === to,
                                        })}
                                        onClick={onClick}
                            />
                        ))
                    }
                </div>

                <div className={style.socialLinks}>
                    {
                        [
                            {
                                icon: svgIcons.telegram,
                                href: "#",
                            },
                            {
                                icon: svgIcons.x_outlined,
                                href: "#",
                            },
                        ].map(({icon, href}, key) => (
                            <a key={key}
                               href={href}
                               target="_blank"
                               rel="nofollow noopener noreferrer"
                               className={style.link}
                            >
                                {icon}
                            </a>
                        ))
                    }
                </div>

            </div>

    )
})