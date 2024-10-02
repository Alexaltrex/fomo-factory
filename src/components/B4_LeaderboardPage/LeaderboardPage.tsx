import style from "./LeaderboardPage.module.scss"
import {observer} from "mobx-react-lite";
import {useStore} from "../../store/rootStore";
import {clsx} from "clsx";
import {ColorThemeEnum} from "../../store/appStore";
import {useState} from "react";
import {Points} from "./Points/Points";
import {Referals} from "./Referals/Referals";
import {Tabs} from "../_common/Tabs/Tabs";

export const LeaderboardPage = observer(() => {
    const {
        appStore: {
            colorTheme
        }
    } = useStore();

    const [tab, setTab] = useState(0);

    return (
        <div className={clsx({
            [style.leaderboardPage]: true,
            [style.leaderboardPage_light]: colorTheme === ColorThemeEnum.light,
        })}>

            <h2 className={style.title}>
                Leaderboard
            </h2>

            <Tabs tabs={["Points", "Referred"]}
                  tab={tab}
                  onClick={_tab => setTab(_tab)}
                  className={style.tabs}
            />

            <div className={style.mobileContent}>
                {
                    tab === 0 ? <Points/> : <Referals/>
                }
            </div>

            <div className={style.desktopContent}>
                <Points/>
                <Referals/>
            </div>


        </div>
    )
})