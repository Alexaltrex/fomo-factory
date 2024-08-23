import style from "./ControlPanel.module.scss"
import {ConfirmedSwitcher} from "./ConfirmedSwitcher/ConfirmedSwitcher";
import {SearchForTokens} from "./SearchForTokens/SearchForTokens";
import {ViewModeSwitcher} from "../../_common/ViewModeSwitcher/ViewModeSwitcher";
import {Filter} from "../../_common/Filter/Filter";
import {observer} from "mobx-react-lite";
import {useStore} from "../../../store/rootStore";
import {clsx} from "clsx";
import {ColorThemeEnum} from "../../../store/appStore";
import {QuickPledge} from "./QuickPledge/QuickPledge";

export const ControlPanel = observer(() => {
    const {
        appStore: {
            colorTheme,
        }
    } = useStore();

    return (
        <div className={clsx({
            [style.controlPanel]: true,
            [style.controlPanel_light]: colorTheme === ColorThemeEnum.light,
        })}>
            <div className={style.topPartMobile}>
                <SearchForTokens/>
                <ViewModeSwitcher/>
            </div>
            <div className={style.middlePartMobile}>
                <Filter/>
                <QuickPledge/>
            </div>
            <div className={style.bottomPartMobile}>
                <ConfirmedSwitcher/>
            </div>

            <div className={style.desktop}>
                <ConfirmedSwitcher/>
                <SearchForTokens/>
                <QuickPledge/>
                <Filter/>
                <ViewModeSwitcher/>
            </div>
        </div>
    )
})