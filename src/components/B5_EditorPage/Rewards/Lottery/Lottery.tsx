import style from "./Lottery.module.scss"
import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import {FormikHelpers, useFormik} from "formik";
import {ButtonCustom, VariantEnum} from "../../../_common/ButtonCustom/ButtonCustom";
import {svgIcons} from "../../../../assets/svgIcons";

interface IValues {
    value: string
}

const initialValues: IValues = {
    value: ""
}

export const Lottery = () => {
    const onSubmit = async (values: IValues, formikHelpers: FormikHelpers<IValues>) => {
        try {
            console.log(values);
        } catch (e: any) {
            console.log(e.message)
        } finally {
            formikHelpers.resetForm();
        }
    }

    const formik = useFormik({
        initialValues,
        onSubmit,
    })


    return (
        <div className={style.lottery}>

            <div className={style.title}>
                <p>Prize pool:</p>
                <p>100 SOL</p>
            </div>

            <div className={style.timerWrapperMobile}>
                <FlipClockCountdown to={new Date().getTime() + 10 * 60 * 60 * 1000}
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
                <FlipClockCountdown to={new Date().getTime() + 10 * 60 * 60 * 1000}
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

                >
                    <span>The countdown is complete</span>
                </FlipClockCountdown>
            </div>

            <form className={style.form}>
                <div className={style.inputWrapper}>
                    <input type="text"
                           placeholder="Enter Lottery Tickets"
                           {...formik.getFieldProps("value")}
                    />
                    <p>max</p>
                </div>
                <ButtonCustom type="submit"
                              label="enter"
                              variant={VariantEnum.contained}
                              className={style.btn}
                />
            </form>

            <p className={style.ticketsAlreadyEntered}>
                Tickets already entered:
            </p>

            <button className={style.buyBtn}>
                <span>Buy Lottery ticket</span>{svgIcons.solana}<span>1.0</span>
            </button>

            <div className={style.table}>

                <div className={style.tableHeader}>
                    <p>Lottery ticket</p>
                </div>

                <div className={style.lotteryTicketLeft}>
                    <p>Lottery ticket left</p>
                    <p>2</p>
                </div>

                <div className={style.bottom}>
                    <div>
                        <p>rp for lottery tickets</p>
                        {svgIcons.info}
                    </div>
                    <p>
                        20,000
                    </p>
                    <p>
                        redeem
                    </p>
                </div>

            </div>

        </div>
    )
}