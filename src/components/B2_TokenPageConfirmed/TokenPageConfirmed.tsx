import style from "./TokenPageConfirmed.module.scss"
import {useState} from "react";
import {clsx} from "clsx";
import {MainInfo} from "./MainInfo/MainInfo";
import {svgIcons} from "../../assets/svgIcons";
import {BuySell} from "./BuySell/BuySell";
import {Chat} from "./Chat/Chat";
import {Tabs} from "../_common/Tabs/Tabs";
import {Trades} from "./Trades/Trades";

export const TokenPageConfirmed = () => {
    const [mobileTab, setMobileTab] = useState(0)
    const [hideSidebar, setHideSidebar] = useState(false);

    return (
        <div className={style.tokenPageConfirmed}>

            <div className={style.mobileContent}>

                <Tabs tabs={
                    [
                        "Main info",
                        "Buy / Sell",
                        "trades",
                        "Chat",
                    ]
                }
                      tab={mobileTab}
                      onClick={(tab) => setMobileTab(tab)}
                      className={style.mobileTabs}
                />

                { mobileTab === 0 && <MainInfo/> }

                { mobileTab === 1 && <BuySell/> }

                { mobileTab === 2 && <Trades/> }

                { mobileTab === 3 && <Chat/> }

            </div>

            <div className={clsx({
                [style.desktopContent]: true,
                [style.desktopContent_hide]: hideSidebar,
            })}>

                <div className={style.desktopContentLeft}>
                    <MainInfo/>
                    <Trades/>
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