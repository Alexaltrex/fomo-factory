import style from "./TokenPageUnconfirmed.module.scss"
import {useState} from "react";
import {clsx} from "clsx";
import {svgIcons} from "../../assets/svgIcons";
import {MainInfo} from "./MainInfo/MainInfo";
import {PledgeUnpledge} from "./PledgeUnpledge/PledgeUnpledge";
import {Chat} from "../B2_TokenPageConfirmed/Chat/Chat";
import {Tabs} from "../_common/Tabs/Tabs";
import {Trades} from "./Trades/Trades";

export const TokenPageUnconfirmed = () => {
    const [mobileTab, setMobileTab] = useState(0)
    const [hideSidebar, setHideSidebar] = useState(false);

    return (
        <div className={style.tokenPageUnconfirmed}>

            <div className={style.mobileContent}>

                <Tabs tabs={[
                    "Main info",
                    "pledge",
                    "trades",
                    "Chat",
                ]}
                      tab={mobileTab}
                      onClick={tab => setMobileTab(tab)}
                      className={style.mobileTabs}
                />

                { mobileTab === 0 && <MainInfo/> }
                { mobileTab === 1 && <PledgeUnpledge/> }
                { mobileTab === 2 && <Trades/>}
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
                    <PledgeUnpledge/>
                    <Chat/>
                </div>
            </div>
        </div>
    )
}