import style from "./Trades.module.scss"
import React, {useState} from "react";
import {trades, tradesUnconfirmed} from "./data";
import {TradesUnconfirmedDesktop} from "../../_common/TradesUnconfirmedDesktop/TradesUnconfirmedDesktop";
import {TradesUnconfirmedMobile} from "../../_common/TradesUnconfirmedMobile/TradesUnconfirmedMobile";
import {HoldersDesktop} from "./HoldersDesktop/HoldersDesktop";
import {HoldersMobile} from "./HoldersMobile/HoldersMobile";
import {Tabs} from "../../_common/Tabs/Tabs";

export const Trades = () => {
    const [tab, setTab] = useState(0)

    const allTrades = [
        ...trades,
        ...trades,
    ];

    const yourTrades = [
        ...tradesUnconfirmed,
        ...tradesUnconfirmed,
    ];

    return (
        <div className={style.trades}>

            <div className={style.header}>
                trades
            </div>

            <Tabs tabs={[
                "ALL TRADES",
                "your trades",
                "HOLDERS",
            ]}
                  tab={tab}
                  onClick={(tab) => setTab(tab)}
                  className={style.tabs}
            />

            {
                tab === 0 && (
                    <>
                        <TradesUnconfirmedMobile trades={allTrades}/>
                        <TradesUnconfirmedDesktop trades={allTrades}
                                                  className={style.tradesUnconfirmedDesktop}
                        />
                    </>
                )
            }

            {
                tab === 1 && (
                    <>
                        <TradesUnconfirmedMobile trades={yourTrades}/>
                        <TradesUnconfirmedDesktop trades={yourTrades}
                                                  className={style.tradesUnconfirmedDesktop}
                        />
                    </>
                )
            }

            {
                tab === 2 && (
                    <>
                        <HoldersMobile/>
                        <HoldersDesktop/>
                    </>
                )
            }

        </div>
    )
}