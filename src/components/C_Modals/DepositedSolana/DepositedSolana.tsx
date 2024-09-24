import {observer} from "mobx-react-lite";
import {useStore} from "../../../store/rootStore";
import style from "./DepositedSolana.module.scss";
import {svgIcons} from "../../../assets/svgIcons";
import {IconButton} from "../../_common/IconButton/IconButton";
import {useRef, useState} from "react";
import {useOutsideClick} from "../../../hooks/useOutsideClick";
import withdraw from "../../../assets/png/withdraw.png";
import withdraw_white from "../../../assets/png/withdraw_white.png";
import {FormikHelpers, useFormik} from "formik";
import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import '@leenguyen/react-flip-clock-countdown/dist/index.css';

interface IDepositValues {
    depositValue: number
}
interface IWithdrawValues {
    withdrawValue: number
}
const initialDepositValues: IDepositValues = {
    depositValue: 0
}
const initialWithdrawValues: IWithdrawValues = {
    withdrawValue: 0
}


export const DepositedSolana = observer(() => {
    const {
        appStore: {
            depositedSolana, setDepositedSolana,
        }
    } = useStore()

    const ref = useRef<HTMLDivElement>(null!);
    const onClose = () => setDepositedSolana(false)
    useOutsideClick(ref, onClose);

    const onSubmit = async (values: IDepositValues, formikHelpers: FormikHelpers<IDepositValues>) => {
        try {
            console.log(values);
        } catch (e: any) {
            console.log(e.message)
        } finally {
            formikHelpers.resetForm();
        }
    }

    const formik = useFormik({
        initialValues: initialDepositValues,
        onSubmit,
    })

    const [showTimer, setShowTimer] = useState(false)

    const onSubmit2 = async (values: IWithdrawValues, formikHelpers: FormikHelpers<IWithdrawValues>) => {
        try {
            console.log(values);
            setShowTimer(true);
        } catch (e: any) {
            console.log(e.message)
        } finally {
            formikHelpers.resetForm();
        }
    }

    const formik2 = useFormik({
        initialValues: initialWithdrawValues,
        onSubmit: onSubmit2,
    })



    return (
        <>
            {
                depositedSolana && (
                    <div className={style.depositedSolana}>

                        <div className={style.card}
                             ref={ref}
                        >
                            <div className={style.cardHeader}>

                                <div className={style.cardHeaderLeft}>

                                    {
                                        showTimer ? (
                                            <>
                                                {svgIcons.left}
                                                <img src={withdraw_white} alt=""/>
                                                <p>WITHDRAW</p>
                                                <div>
                                                    {svgIcons.solana}
                                                    <p>0 SOL</p>
                                                </div>

                                            </>
                                        ) : (
                                            <>
                                                {svgIcons.wallet}
                                                <p>Deposited solana</p>
                                            </>
                                        )
                                    }



                                </div>
                                <IconButton icon={svgIcons.close}
                                            className={style.closeBtn}
                                            onClick={onClose}
                                />

                            </div>

                            {
                                showTimer ? (
                                    <div className={style.timer}>
                                        <div className={style.timerWrapperMobile}>
                                            <FlipClockCountdown to={new Date().getTime() + 24 * 60 * 60 * 1000}
                                                                labels={['Days', 'Hours', 'Mins', 'Sec']}
                                                                labelStyle={{
                                                                    fontFamily: "Space Mono",
                                                                    fontSize: "12px",
                                                                    color: "rgba(255, 255, 255, 0.5)",
                                                                    textTransform: "uppercase",
                                                                }}
                                                                showSeparators={false}
                                                                renderMap={[false, true, true, true]}
                                                                digitBlockStyle={{
                                                                    background: "#101011",
                                                                    width: "27px",
                                                                    height: "44px",
                                                                    fontFamily: "Space Mono",
                                                                    fontSize: "26px",
                                                                    color: "#FFF",
                                                                }}

                                            >
                                                <span>The countdown is complete</span>
                                            </FlipClockCountdown>
                                        </div>

                                        <div className={style.timerWrapperDesktop}>
                                            <FlipClockCountdown to={new Date().getTime() + 24 * 60 * 60 * 1000}
                                                                labels={['Days', 'Hours', 'Mins', 'Sec']}
                                                                labelStyle={{
                                                                    fontFamily: "Space Mono",
                                                                    fontSize: `${1.2 * 12}px`,
                                                                    color: "rgba(255, 255, 255, 0.5)",
                                                                    textTransform: "uppercase",
                                                                }}
                                                                showSeparators={false}
                                                                renderMap={[false, true, true, true]}
                                                                digitBlockStyle={{
                                                                    background: "#101011",
                                                                    width: `${1.2 * 40}px`,
                                                                    height: `${1.2 * 64}px`,
                                                                    fontFamily: "Space Mono",
                                                                    fontSize: `${1.2 * 40}px`,
                                                                    color: "#FFF",
                                                                }}
                                                                dividerStyle={{
                                                                    color: "#101011"
                                                                }}
                                            >
                                                <span>The countdown is complete</span>
                                            </FlipClockCountdown>
                                        </div>
                                    </div>
                                ) : (
                                    <div className={style.price}>
                                        {svgIcons.solana}
                                        <p>100<span>/$3,500</span></p>
                                    </div>
                                )
                            }


                            {
                                showTimer ? (
                                    <p className={style.withdraw}>
                                        withdraw
                                    </p>
                                ) : (
                                    <div className={style.forms}>

                                        <form className={style.form}
                                              onSubmit={formik.handleSubmit}
                                        >
                                            <div className={style.inputWrapper}>
                                                {svgIcons.solana}
                                                <input type="number"
                                                       placeholder="Amount to withdraw SOL"
                                                       {...formik.getFieldProps("depositValue")}
                                                />
                                            </div>
                                            <button className={style.btn}>
                                                <img src={withdraw} alt=""/>
                                                <p>deposit</p>
                                            </button>
                                        </form>

                                        <form className={style.form}
                                              onSubmit={formik2.handleSubmit}
                                        >
                                            <div className={style.inputWrapper}>
                                                {svgIcons.solana}
                                                <input type="number"
                                                       placeholder="Amount to withdraw SOL"
                                                       {...formik.getFieldProps("withdrawValue")}
                                                />
                                            </div>
                                            <button className={style.btn}>
                                                <img src={withdraw} alt="" style={{transform: "rotate(180deg)"}}/>
                                                <p>Withdraw</p>
                                            </button>
                                        </form>

                                    </div>
                                )
                            }


                        </div>

                    </div>
                )
            }
        </>

    )
})