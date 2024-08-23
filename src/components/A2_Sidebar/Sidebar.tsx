import style from "./Sidebar.module.scss"
import {svgIcons} from "../../assets/svgIcons";
import React from "react";
import {IconButton} from "../_common/IconButton/IconButton";
import src0 from "../../assets/png/0.png";
import src1 from "../../assets/png/1.png";
import src2 from "../../assets/png/2.png";
import src3 from "../../assets/png/3.png";
import src4 from "../../assets/png/4.png";
import src5 from "../../assets/png/5.png";
import {useLocation, useNavigate} from "react-router-dom";
import {clsx} from "clsx";
import {observer} from "mobx-react-lite";
import {useStore} from "../../store/rootStore";
import {SourceSingle} from "./SourceSingle/SourceSingle";

export const Sidebar = observer(() => {
    const {
        appStore: {
            setHowToPlayModal,
            favoriteSingles
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
                            <SourceSingle key={favoriteSingle.id}
                                          favoriteSingle={favoriteSingle}
                            />
                            // <img key={id} src={src} alt=""/>
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