import style from "./ControlPanel.module.scss"
import {SearchForTokens} from "../../B0_HomePage/ControlPanel/SearchForTokens/SearchForTokens";
import {FC, useState} from "react";
import {clsx} from "clsx";
import {ViewModeSwitcher} from "../../_common/ViewModeSwitcher/ViewModeSwitcher";
import {Filter} from "../../_common/Filter/Filter";
import {Tabs} from "../../_common/Tabs/Tabs";

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
                        <div className={style.viewModeSwitcherWrapper}>
                            <ViewModeSwitcher/>
                        </div>

                    </>

                )}
            </div>

            <Tabs tabs={[
                "Rewards",
                "tokens",
                "trades",
            ]}
                  tab={tab}
                  className={style.tabs}
                  onClick={tab => onTab(tab)}
            />

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