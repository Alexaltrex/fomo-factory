import style from "./LeaderboardPage.module.scss"
import {observer} from "mobx-react-lite";
import {useStore} from "../../store/rootStore";
import {clsx} from "clsx";
import {ColorThemeEnum} from "../../store/appStore";
import {useState} from "react";
import {Points} from "./Points/Points";
import {Referals} from "./Referals/Referals";

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

            <div className={style.tabs}>
                {
                    [
                        {
                            _tab: 0,
                            label: "Points"
                        },
                        {
                            _tab: 1,
                            label: "Referals"
                        },
                    ].map(({_tab, label}, key) => (
                        <button key={key}
                                className={clsx({
                                    [style.btn]: true,
                                    [style.btn_selected]: _tab === tab,
                                })}
                                onClick={() => setTab(_tab)}
                        >
                            <span>{label}</span>
                        </button>
                    ))
                }
            </div>

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