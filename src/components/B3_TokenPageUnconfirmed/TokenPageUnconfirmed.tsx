import style from "./TokenPageUnconfirmed.module.scss"
import {useState} from "react";
import {clsx} from "clsx";
import {svgIcons} from "../../assets/svgIcons";
import {MainInfo} from "./MainInfo/MainInfo";
import {PledgeUnpledge} from "./PledgeUnpledge/PledgeUnpledge";
import {Chat} from "../B2_TokenPageConfirmed/Chat/Chat";

export const TokenPageUnconfirmed = () => {
    const [mobileTab, setMobileTab] = useState(0)
    const [hideSidebar, setHideSidebar] = useState(false);

    return (
        <div className={style.tokenPageUnconfirmed}>

            <div className={style.mobileContent}>

                <div className={style.mobileTabs}>
                    {
                        [
                            "Main info",
                            "pledge / unpledge",
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
                    mobileTab === 1 && <PledgeUnpledge/>
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
                    <PledgeUnpledge/>
                    <Chat/>
                </div>
            </div>
        </div>
    )
}