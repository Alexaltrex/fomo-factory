import style from "./Trades.module.scss"
import React, {useState} from "react";
import {clsx} from "clsx";
import {tradesConfirmed, trades2} from "./data";
import {HoldersDesktop} from "./HoldersDesktop/HoldersDesktop";
import {HoldersMobile} from "./HoldersMobile/HoldersMobile";
import {TradesConfirmedMobile} from "../../_common/TradesConfirmedMobile/TradesConfirmedMobile";
import {TradesConfirmedDesktop} from "../../_common/TradesConfirmedDesktop/TradesConfirmedDesktop";
import {Tabs} from "../../_common/Tabs/Tabs";

export const Trades = () => {
    const [tab, setTab] = useState(0)

    const allTrades = [
        ...tradesConfirmed,
        ...tradesConfirmed,
    ];

    const yourTrades = [
        ...trades2,
        ...trades2,
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
                        <TradesConfirmedMobile trades={allTrades}

                        />
                        <TradesConfirmedDesktop trades={allTrades}
                                                className={style.tradesConfirmedDesktop}
                        />
                    </>
                )
            }

            {
                tab === 1 && (
                    <>
                        <TradesConfirmedMobile trades={yourTrades}/>
                        <TradesConfirmedDesktop trades={yourTrades}
                                                className={style.tradesConfirmedDesktop}
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