import style from "./Tokens.module.scss"
import {Tabs} from "../../_common/Tabs/Tabs";
import {useState} from "react";
import {useStore} from "../../../store/rootStore";
import {observer} from "mobx-react-lite";
import {ViewModeEnum} from "../../../store/appStore";
import {TokensList} from "./TokensList/TokensList";
import {TokensGrid} from "./TokensGrid/TokensGrid";
import {ButtonCustom, VariantEnum} from "../../_common/ButtonCustom/ButtonCustom";

export const Tokens = observer(() => {
    const {
        appStore: {
            viewMode
        }
    } = useStore()

    const [tab, setTab] = useState(0);

    return (
        <div className={style.tokens}>

            <Tabs tabs={["Confirmed", "unConfirmed"]}
                  tab={tab}
                  onClick={_tab => setTab(_tab)}
                  className={style.tabs}
            />

            {
                viewMode === ViewModeEnum.list && (
                    <TokensList/>
                )
            }

            {
                viewMode === ViewModeEnum.grid && (
                    <TokensGrid/>
                )
            }


            <ButtonCustom label="Add new link"
                          variant={VariantEnum.contained}
                          className={style.addNewLinkBtn}
            />
        </div>
    )
})