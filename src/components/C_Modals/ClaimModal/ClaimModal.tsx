import {observer} from "mobx-react-lite";
import {useStore} from "../../../store/rootStore";
import {useRef, useState} from "react";
import {useOutsideClick} from "../../../hooks/useOutsideClick";
import style from "./ClaimModal.module.scss"
import {svgIcons} from "../../../assets/svgIcons";
import {IconButton} from "../../_common/IconButton/IconButton";
import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import '@leenguyen/react-flip-clock-countdown/dist/index.css';
import {ButtonCustom} from "../../_common/ButtonCustom/ButtonCustom";
import {clsx} from "clsx";


export const ClaimModal = observer(() => {
    const {
        appStore: {
            claimModal, setClaimModal,
            winValue,
        }
    } = useStore();

    const onClose = () => setClaimModal(false);
    const ref = useRef<HTMLDivElement>(null!);
    useOutsideClick(ref, onClose);

const [tasks, setTasks] = useState(
    [
        {
            icon: svgIcons.solana,
            label: "Deposit 0.1 SOL",
            buttonLabel: "Deposit",
            done: true,
        },
        {
            icon: svgIcons.hand_dollar,
            label: "Pledge to two celebrities",
            buttonLabel: "Pledge",
            done: true,
        },
        {
            icon: svgIcons.notification,
            label: "Buy social tokens",
            buttonLabel: "Buy",
            done: false,
        },
        {
            icon: svgIcons.receipt,
            label: "Enter Lottery for social tokens",
            buttonLabel: "Enter",
            done: false,
        },
    ]
)

    return (
        <>
            {
                claimModal && (
                    <div className={style.claimModal}>
                        <div className={style.card}
                             ref={ref}
                        >
                            <div className={style.cardHeader}>
                                <div className={style.cardHeaderLeft}>
                                    {svgIcons.trophy}
                                    <p>Claim your <span>{winValue}</span> before timer runs out</p>
                                </div>
                                <IconButton icon={svgIcons.close}
                                            className={style.closeBtn}
                                            onClick={onClose}
                                />
                            </div>

                            <div className={style.timerWrapper}>

                                <div className={style.timerWrapperMobile}>
                                    <FlipClockCountdown to={new Date().getTime() + 10 * 60 * 1000}
                                                        labels={['Days', 'Hours', 'Mins', 'Sec']}
                                                        labelStyle={{
                                                            fontFamily: "Space Mono",
                                                            fontSize: "12px",
                                                            color: "rgba(255, 255, 255, 0.5)",
                                                            textTransform: "uppercase",
                                                        }}
                                                        showSeparators={false}
                                                        renderMap={[false, false, true, true]}
                                                        digitBlockStyle={{
                                                            background: "#101011",
                                                            width: "40px",
                                                            height: "64px",
                                                            fontFamily: "Space Mono",
                                                            fontSize: "40px",
                                                            color: "#FFF",
                                                        }}

                                    >
                                        <span>The countdown is complete</span>
                                    </FlipClockCountdown>
                                </div>

                                <div className={style.timerWrapperDesktop}>
                                    <FlipClockCountdown to={new Date().getTime() + 10 * 60 * 1000}
                                                        labels={['Days', 'Hours', 'Mins', 'Sec']}
                                                        labelStyle={{
                                                            fontFamily: "Space Mono",
                                                            fontSize: `${1.2 * 12}px`,
                                                            color: "rgba(255, 255, 255, 0.5)",
                                                            textTransform: "uppercase",
                                                        }}
                                                        showSeparators={false}
                                                        renderMap={[false, false, true, true]}
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

                                <p className={style.description}>
                                    Claim {winValue} by on-boarding using the following steps
                                </p>

                            </div>


                            <div className={style.tasks}>
                                {
                                    tasks.map(({icon, label, buttonLabel, done}, key) => (
                                        <div key={key}
                                             className={clsx({
                                                 [style.task]: true,
                                                 [style.task_done]: done,
                                             })}
                                        >
                                            <div className={style.taskLeft}>
                                                <div className={style.icon}>
                                                    {icon}
                                                </div>
                                                <p>{label}</p>
                                            </div>

                                            {
                                                !done && (
                                                    <ButtonCustom label={buttonLabel}
                                                                  className={style.btn}
                                                                  onClick={() => {
                                                                      setTasks(
                                                                          [...tasks]
                                                                          .map((task, index) => index !== key ? task : {...task, done: true})
                                                                      )
                                                                  }}
                                                    />
                                                )
                                            }
                                        </div>
                                    ))
                                }
                            </div>


                        </div>
                    </div>
                )
            }

        </>

    )
})