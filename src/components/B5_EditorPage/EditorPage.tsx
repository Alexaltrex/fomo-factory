import style from "./EditorPage.module.scss"
import {AccountInfo} from "./AccountInfo/AccountInfo";
import {ControlPanel} from "./ControlPanel/ControlPanel";
import {useEffect, useState} from "react";
import {Rewards} from "./Rewards/Rewards";

import {observer} from "mobx-react-lite";
import {useStore} from "../../store/rootStore";
import {unconfirmedTokens} from "../B0_HomePage/Tokens/data_unconfirmedToken";
import {confirmedTokens} from "../B0_HomePage/Tokens/data_confirmedToken";
import {ViewModeEnum} from "../../store/appStore";
import {ConfirmedListMobile} from "../B0_HomePage/Tokens/ConfirmedListMobile/ConfirmedListMobile";
import {ConfirmedListDesktop} from "../B0_HomePage/Tokens/ConfirmedListDesktop/ConfirmedListDesktop";
import {UnconfirmedListMobile} from "../B0_HomePage/Tokens/UnconfirmedListMobile/UnconfirmedListMobile";
import {UnconfirmedListDesktop} from "../B0_HomePage/Tokens/UnconfirmedListDesktop/UnconfirmedListDesktop";
import {UnconfirmedGrid} from "../B0_HomePage/Tokens/UnconfirmedGrid/UnconfirmedGrid";
import {ConfirmedGrid} from "../B0_HomePage/Tokens/ConfirmedGrid/ConfirmedGrid";
import {tradesConfirmed} from "../B2_TokenPageConfirmed/Trades/data";
import {tradesUnconfirmed} from "../B3_TokenPageUnconfirmed/Trades/data";
import {TradesConfirmedDesktop} from "../_common/TradesConfirmedDesktop/TradesConfirmedDesktop";
import {TradesConfirmedMobile} from "../_common/TradesConfirmedMobile/TradesConfirmedMobile";
import {TradesUnconfirmedMobile} from "../_common/TradesUnconfirmedMobile/TradesUnconfirmedMobile";
import {TradesUnconfirmedDesktop} from "../_common/TradesUnconfirmedDesktop/TradesUnconfirmedDesktop";


export const EditorPage = observer(() => {
    const {
        appStore: {
            viewMode
        }
    } = useStore()

    const [tab, setTab] = useState(0)

    const [myTradesConfirmed, setMyTradesConfirmed] = useState(false);

    useEffect(() => {
        if (tab !== 3) {
            setMyTradesConfirmed(false)
        }
    }, [tab])

    const unconfirmedTokensData = [
        ...unconfirmedTokens,
        ...unconfirmedTokens,
        ...unconfirmedTokens,
        ...unconfirmedTokens,
    ]

    const confirmedTokensData = [
        ...confirmedTokens,
        ...confirmedTokens,
        ...confirmedTokens,
        ...confirmedTokens,
    ]

    const tradesConfirmedData = [
        ...tradesConfirmed,
        ...tradesConfirmed,
        ...tradesConfirmed,
        ...tradesConfirmed,
    ];

    const tradesUnconfirmedData = [
        ...tradesUnconfirmed,
        ...tradesUnconfirmed,
        ...tradesUnconfirmed,
        ...tradesUnconfirmed,
    ];

    return (
        <div className={style.editorPage}>

            <h2 className={style.title}>
                Editor's panel
            </h2>
            <AccountInfo/>
            <ControlPanel tab={tab}
                          onTab={(tab) => setTab(tab)}
                          myTradesConfirmed={myTradesConfirmed}
                          onConfirm={() => setMyTradesConfirmed(!myTradesConfirmed)}
            />

            {
                tab === 0 && <Rewards/>
            }

            {
                tab === 1 && viewMode === ViewModeEnum.list && (
                    <>
                        <ConfirmedListMobile tokens={confirmedTokensData}
                                             className={style.confirmedListMobile}
                        />
                        <ConfirmedListDesktop tokens={confirmedTokensData}
                                              className={style.confirmedListDesktop}
                        />
                    </>
                )
            }

            {
                tab === 1 && viewMode === ViewModeEnum.grid && (
                    <ConfirmedGrid tokens={confirmedTokensData}
                                   className={style.confirmedGrid}
                    />
                )
            }


            {
                tab === 2 && viewMode === ViewModeEnum.list && (
                    <>
                        <UnconfirmedListMobile tokens={unconfirmedTokensData}
                                               className={style.unconfirmedListMobile}
                        />
                        <UnconfirmedListDesktop tokens={unconfirmedTokensData}
                                                className={style.unconfirmedListDesktop}
                        />
                    </>
                )
            }

            {
                tab === 2 && viewMode === ViewModeEnum.grid && (
                    <UnconfirmedGrid tokens={unconfirmedTokensData}
                                     className={style.unconfirmedGrid}
                    />
                )
            }

            {
                tab === 3 && myTradesConfirmed && (
                    <>
                        <TradesConfirmedMobile trades={tradesConfirmedData}
                                               className={style.tradesMobile}
                        />
                        <TradesConfirmedDesktop trades={tradesConfirmedData}
                                                className={style.tradesDesktop}
                        />
                    </>
                )
            }

            {
                tab === 3 && !myTradesConfirmed && (
                    <>
                        <TradesUnconfirmedMobile trades={tradesUnconfirmedData}
                                                 className={style.tradesMobile}
                        />
                        <TradesUnconfirmedDesktop trades={tradesUnconfirmedData}
                                                  className={style.tradesDesktop}
                        />
                    </>
                )
            }


        </div>
    )
})