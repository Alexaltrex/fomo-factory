import style from "./TokenPageConfirmed.module.scss"
import {useState} from "react";
import {clsx} from "clsx";
import {MainInfo} from "./MainInfo/MainInfo";
import {svgIcons} from "../../assets/svgIcons";
import {BuySell} from "./BuySell/BuySell";
import {Chat} from "./Chat/Chat";

export const TokenPageConfirmed = () => {
    const [mobileTab, setMobileTab] = useState(0)
    const [hideSidebar, setHideSidebar] = useState(false);

    return (
        <div className={style.tokenPageConfirmed}>

            <div className={style.mobileContent}>

                <div className={style.mobileTabs}>
                    {
                        [
                            "Main info",
                            "Buy / Sell",
                            "Chat",
                        ].map((label, key) => (
                            <button key={key}
                                    onClick={() => setMobileTab(key)}
                                    className={clsx({
                                        [style.tab]: true,
                                        [style.tab_selected]: key === mobileTab,
                                    })}
                            >
                                <span>{label}</span>
                            </button>
                        ))
                    }
                </div>

                {
                    mobileTab === 0 && <MainInfo/>
                }

                {
                    mobileTab === 1 && <BuySell/>
                }

                {
                    mobileTab === 2 && <Chat/>
                }

            </div>

            <div className={clsx({
                [style.desktopContent]: true,
                [style.desktopContent_hide]: hideSidebar,
            })}>

                <div className={style.desktopContentLeft}>
                    <MainInfo/>
                    <button className={style.hideBtn}
                            onClick={() => setHideSidebar(!hideSidebar)}
                    >
                        {svgIcons.right}
                    </button>
                </div>

                <div className={style.desktopContentRight}>
                    <BuySell/>
                    <Chat/>
                </div>

            </div>

        </div>
    )
}