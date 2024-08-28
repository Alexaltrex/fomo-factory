import style from "./Menu.module.scss"
import {observer} from "mobx-react-lite";
import {useStore} from "../../store/rootStore";
import {clsx} from "clsx";
import {ColorThemeEnum} from "../../store/appStore";
import {Link, useNavigate} from "react-router-dom";
import {svgIcons} from "../../assets/svgIcons";
import React from "react";
import {Single} from "./Single/Single";
import {Folder} from "./Folder/Folder";

export const Menu = observer(() => {
    const {
        appStore: {
            menu, setMenu,
            colorTheme,
            setHowToPlayModal,
            favoriteSingles,
            favoriteFolders,
        }
    } = useStore();

    const navigate = useNavigate();
    const onClose = () => setMenu(false)

    return (
            <div className={clsx({
                [style.menu]: true,
                [style.menu_show]: menu,
                [style.menu_light]: colorTheme === ColorThemeEnum.light,
            })}>

                <div className={style.menuMain}>

                    <div className={style.section}>
                        <p className={style.sectionTitle}>
                            my favorite
                        </p>

                        <div className={style.favorites}>

                            <div className={style.singles}>
                                {
                                    favoriteSingles.map(single => (
                                        <Single key={single.id}
                                                single={single}
                                        />
                                    ))
                                }
                            </div>

                            <div className={style.folders}>
                                {
                                    favoriteFolders.map(single => (
                                        <Folder key={single.id}
                                                favoriteFolder={single}
                                        />
                                    ))
                                }
                            </div>

                        </div>
                    </div>

                    <div className={style.section}>
                        <p className={style.sectionTitle}>
                            menu
                        </p>

                        <div className={style.links}>
                            {
                                [
                                    {
                                        icon: svgIcons.grid2,
                                        label: "main page",
                                        to: "/",
                                        onClick: () => navigate("/"),
                                    },
                                    {
                                        icon: svgIcons.trophy,
                                        label: "Leaderboard",
                                        to: "/leaderboard",
                                        onClick: () => navigate("/leaderboard"),
                                    },
                                    {
                                        icon: svgIcons.light_bulb,
                                        label: "How to play",
                                        to: "/howToPlay",
                                        onClick: () => setHowToPlayModal(true),
                                    },
                                    {
                                        icon: svgIcons.copy,
                                        label: "docs",
                                        to: "/docs",
                                        onClick: () => navigate("/docs"),
                                    },
                                ].map(({
                                           icon,
                                           onClick,
                                           label
                                       }, key) => (
                                    <button key={key}

                                            className={style.link}
                                            onClick={() => {
                                                onClick()
                                                onClose()
                                            }}
                                    >
                                        <div className={style.icon}>{icon}</div>
                                        <p>{label}</p>
                                    </button>
                                ))
                            }
                        </div>
                    </div>

                    <div className={style.section}>
                        <p className={style.sectionTitle}>
                            Social media
                        </p>

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
                                       className={style.socialLink}
                                    >
                                        {icon}
                                    </a>
                                ))
                            }
                        </div>
                    </div>

                </div>

                <div className={style.menuBottom}>
                    {
                        [
                            {
                                label: "Cookie Policy",
                                to: "/cookiePolicy",
                            },
                            {
                                label: "Privacy",
                                to: "/privacy",
                            },
                            {
                                label: "Terms of use",
                                to: "/termsOfUse",
                            },
                        ].map(({label, to}, key) => (
                            <Link key={key}
                                  to={to}
                                  className={style.link}
                                  onClick={onClose}
                            >
                                {label}
                            </Link>
                        ))
                    }
                </div>

            </div>
    )
})