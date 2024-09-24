import style from "./DepositSolana.module.scss";
import {svgIcons} from "../../../../assets/svgIcons";
import {observer} from "mobx-react-lite";
import {useStore} from "../../../../store/rootStore";

export const DepositSolana = observer(() => {
    const {
        appStore: {
            setDepositedSolana,
        }
    } = useStore()


    return (
        <button className={style.depositSolana}
                onClick={() => setDepositedSolana(true)}
        >
            {svgIcons.solana}
            <span>Deposit Solana</span>
        </button>
    )
})