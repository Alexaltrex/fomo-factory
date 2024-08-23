import style from "./HoldersMobile.module.scss";
import {holders} from "../data";
import {svgIcons} from "../../../../assets/svgIcons";

export const HoldersMobile = () => {
    return (
        <div className={style.holdersMobile}>

            <div className={style.table}>

                <div className={style.tableLeft}>

                    <div className={style.header}>
                        <p>Address</p>
                    </div>

                    <div className={style.body}>
                        {
                            [
                                ...holders,
                                ...holders,
                            ]
                                .map(({
                                          address,

                                      }, key) => (
                                    <div key={key}
                                         className={style.row}
                                    >
                                        <div className={style.dot}/>
                                        <p>
                                            {address.slice(0, 3) + "..." + address.slice(address.length - 3, address.length)}
                                        </p>
                                        <button onClick={() => navigator.clipboard.writeText(address)}>
                                            {svgIcons.copy2}
                                        </button>
                                    </div>
                                ))
                        }
                    </div>

                </div>

                <div className={style.tableRight}>
                    <div className={style.tableRightInner}>

                        <div className={style.header}>
                            {
                                [
                                    "Tokens",
                                    "Balance, SOL",
                                ].map((label, key) => (
                                    <p key={key}>
                                        {label}
                                    </p>
                                ))
                            }
                        </div>

                        <div className={style.body}>
                            {
                                [
                                    ...holders,
                                    ...holders,
                                ]
                                    .map(({
                                              tokens,
                                              balance
                                          }, key) => (
                                        <div key={key}
                                             className={style.row}
                                        >
                                            <div className={style.tokens}>
                                                <p>{tokens[0]}</p>
                                                <p>{tokens[1]}</p>
                                            </div>

                                            <div className={style.balance}>
                                                {svgIcons.solana}<p>{balance[0]}<span>/{balance[1]}</span></p>
                                            </div>
                                        </div>
                                    ))
                            }
                        </div>

                    </div>
                </div>

            </div>


            <div className={style.accountDistribution}>

                <div className={style.header}>
                    Account distribution
                </div>

                <div className={style.diagramWrapper}>
                    <p>26%</p>
                    <p>Whale Accounts</p>
                    <p>$13,421,842,30</p>
                    {svgIcons.diagram}
                </div>

                <div className={style.tips}>
                    {
                        [
                            {
                                label: "Whale",
                                value: 26,
                            },
                            {
                                label: "Dolphin",
                                value: 13,
                            },
                            {
                                label: "Fish",
                                value: 59,
                            },
                            {
                                label: "Shrimp",
                                value: 2,
                            },
                        ].map(({label, value}, key) => (
                            <div key={key}
                                 className={style.tip}
                            >
                                <div className={style.dot}/>
                                <p>{label} <span>{value}%</span></p>
                            </div>
                        ))
                    }
                </div>
            </div>

        </div>
    )
}