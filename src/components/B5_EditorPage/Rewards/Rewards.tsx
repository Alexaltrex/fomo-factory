import style from "./Rewards.module.scss"
import {ButtonCustom, VariantEnum} from "../../_common/ButtonCustom/ButtonCustom";
import {svgIcons} from "../../../assets/svgIcons";
import {IconButton} from "../../_common/IconButton/IconButton";
import {observer} from "mobx-react-lite";
import {useStore} from "../../../store/rootStore";
import {CelebsRefered} from "../../C_Modals/CelebsRefered/CelebsRefered";
import {useState} from "react";
import {Tabs} from "../../_common/Tabs/Tabs";
import {Cash} from "./Cash/Cash";
import {FP} from "./FP/FP";
import {Lottery} from "./Lottery/Lottery";

export const Rewards =() => {

    const [tab, setTab] = useState(0)

    return (
        <div className={style.rewards}>

            <Tabs tabs={[
                "CASH",
                "✦ FP",
                "Lottery",
            ]}
                  tab={tab}
                  className={style.tabs}
                  onClick={tab => setTab(tab)}
            />

            { tab === 0 && <Cash/> }
            { tab === 1 && <FP/> }
            { tab === 2 && <Lottery/> }

        </div>
    )
}