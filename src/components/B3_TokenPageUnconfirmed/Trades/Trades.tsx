import style from "./Trades.module.scss"
import React, {useState} from "react";
import {clsx} from "clsx";
import {trades, tradesUnconfirmed} from "./data";
import {TradesUnconfirmedDesktop} from "../../_common/TradesUnconfirmedDesktop/TradesUnconfirmedDesktop";
import {TradesUnconfirmedMobile} from "../../_common/TradesUnconfirmedMobile/TradesUnconfirmedMobile";
import {HoldersDesktop} from "./HoldersDesktop/HoldersDesktop";
import {HoldersMobile} from "./HoldersMobile/HoldersMobile";

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

            <div className={style.tabs}>
                {
                    [
                        {
                            label: "ALL TRADES",
                            value: 321
                        },
                        {
                            label: "your trades",
                            value: 229
                        },
                        {
                            label: "HOLDERS",
                            value: 162
                        },
                    ].map(({label, value}, key) => (
                        <button key={key}
                                className={clsx({
                                    [style.tab]: true,
                                    [style.tab_selected]: key === tab,
                                })}
                                onClick={() => setTab(key)}
                        >
                            <p>{label}</p>
                            <p>[{value}]</p>
                        </button>
                    ))
                }
            </div>

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