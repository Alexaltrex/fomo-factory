import style from "./TradesUnconfirmedMobile.module.scss";
import {ITrade} from "../../B3_TokenPageUnconfirmed/Trades/data";
import {FC} from "react";
import {clsx} from "clsx";
import {svgIcons} from "../../../assets/svgIcons";

interface ITradesUnconfirmedMobile {
    trades: ITrade[]
    className?: string
}

export const TradesUnconfirmedMobile: FC<ITradesUnconfirmedMobile> = ({
                                                                          trades,
                                                                          className
                                                                      }) => {
    return (
        <div className={clsx(
            style.tradesUnconfirmedMobile,
            Boolean(className) && className,
        )}>
            <div className={style.inner}>
                <div className={style.left}>

                    <div className={style.header}>
                        {
                            [
                                "Holders",
                            ].map((label, key) => (
                                <p key={key}>
                                    {label}
                                </p>
                            ))
                        }
                    </div>

                    <div className={style.body}>
                        {
                            trades.map(({
                                            src,
                                            name,
                                        }, key) => (
                                <div key={key}
                                     className={style.row}
                                >

                                    <img src={src} alt=""/>
                                    <p>{name}</p>
                                </div>
                            ))
                        }
                    </div>

                </div>

                <div className={style.right}>
                    <div className={style.rightInner}>

                        <div className={style.header}>
                            {
                                [
                                    "Type",
                                    "Pledged",
                                    "Price",
                                    "Time",
                                    "Transaction"
                                ].map((label, key) => (
                                    <p key={key}>
                                        {label}
                                    </p>
                                ))
                            }
                        </div>

                        <div className={style.body}>
                            {
                                trades.map(({
                                                type,
                                                pledgeAmount,
                                                time,
                                                transaction,
                                            }, key) => (
                                    <div key={key}
                                         className={style.row}
                                    >
                                        <div className={clsx({
                                            [style.type]: true,
                                            [style.type_sell]: type === "Unpledged",
                                        })}>
                                            <p>
                                                {type === "Pledged" ? "Pledged" : "Unpledged"}
                                            </p>
                                        </div>

                                        <div className={style.pledged}>
                                            {svgIcons.solana}
                                            <p>
                                                {pledgeAmount[0]}<span>/${pledgeAmount[1]}</span>
                                            </p>
                                        </div>

                                        <div className={style.price}>
                                            <p>$3.5</p>
                                        </div>


                                        <div className={style.time}>
                                            <p>12 d</p>
                                        </div>

                                        <div className={style.transaction}>
                                            <p>
                                                {transaction.slice(0, 6) + "..." + transaction.slice(transaction.length - 4, transaction.length)}
                                            </p>
                                        </div>

                                    </div>
                                ))
                            }
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}