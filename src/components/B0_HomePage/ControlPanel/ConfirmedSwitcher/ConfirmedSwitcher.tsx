import {observer} from "mobx-react-lite";
import {useStore} from "../../../../store/rootStore";
import style from "./ConfirmedSwitcher.module.scss"
import {clsx} from "clsx";
import {ColorThemeEnum} from "../../../../store/appStore";
import {Tabs} from "../../../_common/Tabs/Tabs";

export const ConfirmedSwitcher = observer(() => {
    const {
        appStore: {
            confirmed, setConfirmed,
            colorTheme,
        }
    } = useStore()

    return (
        <Tabs tabs={["Confirmed", "Unconfirmed"]}
              tab={confirmed ? 0 : 1}
              onClick={(tab: number) => {
                  setConfirmed(tab === 0)
              }}
              className={style.confirmedSwitcher}
        />
        // <div className={clsx({
        //     [style.confirmedSwitcher]: true,
        //     [style.confirmedSwitcher_light]: colorTheme === ColorThemeEnum.light,
        // })}
        // >
        //     {
        //         [
        //             {
        //                 _confirmed: true,
        //                 label: "Confirmed"
        //             },
        //             {
        //                 _confirmed: false,
        //                 label: "Unconfirmed"
        //             },
        //         ].map(({_confirmed, label}, key) => (
        //             <button key={key}
        //                     onClick={() => setConfirmed(_confirmed)}
        //                     className={clsx({
        //                         [style.btn]: true,
        //                         [style.btn_selected]: _confirmed === confirmed,
        //                     })}
        //             >
        //                 <span>{label}</span>
        //             </button>
        //         ))
        //     }
        // </div>
    )
})