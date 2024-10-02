import {ITrade} from "../../B3_TokenPageUnconfirmed/Trades/data";
import {FC} from "react";
import style from "./TradesUnconfirmedDesktop.module.scss";
import {clsx} from "clsx";
import {svgIcons} from "../../../assets/svgIcons";

interface ITradesUnconfirmedDesktop {
    trades: ITrade[]
    className?: string
}

export const TradesUnconfirmedDesktop: FC<ITradesUnconfirmedDesktop> = ({
                                                                            trades,
                                                                            className
                                                                        }) => {
    return (
        <div className={clsx(
            style.tradesUnconfirmedDesktop,
            Boolean(className) && className,
        )}
        >
            <div className={style.header}>
                {
                    [
                        "Holders",
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
                                    src,
                                    name,
                                    type,
                                    pledgeAmount,
                                    time,
                                    transaction,
                                }, key) => (
                        <div key={key}
                             className={style.row}
                        >

                            <div className={style.holders}>
                                <img src={src} alt=""/>
                                <p>{name}</p>
                            </div>

                            <div className={clsx({
                                [style.type]: true,
                                [style.type_sell]: type === "Pledged",
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
    )
}