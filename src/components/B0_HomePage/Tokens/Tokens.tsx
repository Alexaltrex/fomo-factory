import style from "./Tokens.module.scss";
import {observer} from "mobx-react-lite";
import {useStore} from "../../../store/rootStore";
import {ViewModeEnum} from "../../../store/appStore";
import {unconfirmedTokens} from "./data_unconfirmedToken";
import {UnconfirmedListMobile} from "./UnconfirmedListMobile/UnconfirmedListMobile";
import {UnconfirmedListDesktop} from "./UnconfirmedListDesktop/UnconfirmedListDesktop";
import {UnconfirmedGrid} from "./UnconfirmedGrid/UnconfirmedGrid";
import {confirmedTokens} from "./data_confirmedToken";
import {ConfirmedListDesktop} from "./ConfirmedListDesktop/ConfirmedListDesktop";
import {ConfirmedListMobile} from "./ConfirmedListMobile/ConfirmedListMobile";
import {ConfirmedGrid} from "./ConfirmedGrid/ConfirmedGrid";

export const Tokens = observer(() => {
    const {
        appStore: {
            colorTheme, viewMode, confirmed
        }
    } = useStore();

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

    return (
        <div className={style.tokens}>

            {
                !confirmed && viewMode === ViewModeEnum.list && (
                    <>
                        <UnconfirmedListDesktop tokens={unconfirmedTokensData}
                                                className={style.unconfirmedListDesktop}
                        />
                    </>

                )
            }

            {
                !confirmed && viewMode === ViewModeEnum.grid && (
                    <UnconfirmedGrid tokens={unconfirmedTokensData}
                                     className={style.unconfirmedGrid}
                    />
                )
            }

            {
                confirmed && viewMode === ViewModeEnum.list && (
                    <>
                        <ConfirmedListDesktop tokens={confirmedTokensData}
                                              className={style.confirmedListDesktop}
                        />
                    </>

                )
            }

            {
                confirmed && viewMode === ViewModeEnum.grid && (
                    <ConfirmedGrid tokens={confirmedTokensData}
                                   className={style.confirmedGrid}
                    />
                )
            }

        </div>
    )
})