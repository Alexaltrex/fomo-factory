import style from "./TransactionAlerts.module.scss";
import {observer} from "mobx-react-lite";
import {useStore} from "../../../store/rootStore";
import {svgIcons} from "../../../assets/svgIcons";
import {TransactionStatusEnum} from "../../../store/cryptoStore";

export const TransactionAlerts = observer(() => {
    const {
        cryptoStore: {
            transactionAlerts,
            changeTransactionAlert,
        }
    } = useStore()

    console.log(Object.values(transactionAlerts))

    return (
        <>
            {
                Object.values(transactionAlerts)
                    .filter(({show}) => show)
                    .map(({id, status, text, show}, key) => (
                        <div key={id}
                             className={style.transaction}
                             style={{
                                top: `${key === 0 ? 24 : 24 + (key - 1) * 44}px`
                             }}
                        >
                            <div className={style.body}>
                                {status === TransactionStatusEnum.pending ? svgIcons.circleNotch : svgIcons.check}
                                <p>{text}</p>
                            </div>

                            <button className={style.closeBtn}
                                    onClick={() => changeTransactionAlert({
                                        id,
                                        status,
                                        text,
                                        show: false,
                                    })}
                            >
                                {svgIcons.close}
                            </button>
                        </div>
                    ))
            }
        </>
    )
})