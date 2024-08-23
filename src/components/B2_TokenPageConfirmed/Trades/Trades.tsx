import style from "./Trades.module.scss"
import React, {useState} from "react";
import {clsx} from "clsx";
import {tradesConfirmed, trades2} from "./data";
import {HoldersDesktop} from "./HoldersDesktop/HoldersDesktop";
import {HoldersMobile} from "./HoldersMobile/HoldersMobile";
import {TradesConfirmedMobile} from "../../_common/TradesConfirmedMobile/TradesConfirmedMobile";
import {TradesConfirmedDesktop} from "../../_common/TradesConfirmedDesktop/TradesConfirmedDesktop";

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
                        <TradesConfirmedMobile trades={allTrades}/>
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