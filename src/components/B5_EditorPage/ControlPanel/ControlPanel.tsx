import style from "./ControlPanel.module.scss"
import {SearchForTokens} from "../../B0_HomePage/ControlPanel/SearchForTokens/SearchForTokens";
import {FC, useState} from "react";
import {clsx} from "clsx";
import {ViewModeSwitcher} from "../../_common/ViewModeSwitcher/ViewModeSwitcher";
import {Filter} from "../../_common/Filter/Filter";

interface IControlPanel {
    tab: number
    onTab: (tab: number) => void
    myTradesConfirmed: boolean
    onConfirm: () => void
}

export const ControlPanel: FC<IControlPanel> = ({
                                                    tab,
                                                    onTab,
                                                    myTradesConfirmed,
                                                    onConfirm,
                                                }) => {

    return (
        <div className={style.controlPanel}>

            <div className={style.searchSection}>
                <SearchForTokens/>
                {(tab === 1 || tab === 2) && (
                    <>
                        <Filter className={style.filter}/>
                        <ViewModeSwitcher/>
                    </>

                )}
            </div>

            <div className={style.tabs}>
                {
                    [
                        "Rewards",
                        "Confirmed",
                        "Unconfirmed",
                        "my trades",
                    ].map((label, key) => (
                        <button key={key}
                                className={clsx({
                                    [style.tab]: true,
                                    [style.tab_selected]: key === tab,
                                })}
                                onClick={() => onTab(key)}
                        >
                            <span>{label}</span>
                        </button>
                    ))
                }
            </div>

            {
                tab === 3 && (
                    <button className={clsx({
                        [style.myTradesSwitcher]: true,
                        [style.myTradesSwitcher_on]: myTradesConfirmed
                    })}
                            onClick={onConfirm}
                    >
                        <div className={style.switcher}/>
                        <p>
                            {
                                myTradesConfirmed ? "Confirmed" : "UnConfirmed"
                            }
                        </p>
                    </button>
                )
            }


        </div>
    )
}