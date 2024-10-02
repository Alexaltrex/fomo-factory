import style from "./Trades.module.scss"
import {Tabs} from "../../_common/Tabs/Tabs";
import {useState} from "react";
import {ButtonCustom, VariantEnum} from "../../_common/ButtonCustom/ButtonCustom";
import {observer} from "mobx-react-lite";
import {useStore} from "../../../store/rootStore";
import {ViewModeEnum} from "../../../store/appStore";
import {TradesList} from "./TradesList/TradesList";
import {TradesGrid} from "./TradesGrid/TradesGrid";

export const Trades = observer(() => {
    const {
        appStore: {
            viewMode
        }
    } = useStore()

    const [tab, setTab] = useState(0);

    return (
        <div className={style.trades}>

            <Tabs tabs={["Confirmed", "unConfirmed"]}
                  tab={tab}
                  onClick={_tab => setTab(_tab)}
                  className={style.tabs}
            />

            { viewMode === ViewModeEnum.list && <TradesList/> }
            { viewMode === ViewModeEnum.grid && <TradesGrid/> }

            <ButtonCustom label="Add new link"
                          variant={VariantEnum.contained}
                          className={style.addNewLinkBtn}
            />

        </div>
    )
})