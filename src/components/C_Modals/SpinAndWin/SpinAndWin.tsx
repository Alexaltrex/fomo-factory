import style from "./SpinAndWin.module.scss"
import {observer} from "mobx-react-lite";
import {useStore} from "../../../store/rootStore";
import {useRef, useState} from "react";
import {useOutsideClick} from "../../../hooks/useOutsideClick";
import {svgIcons} from "../../../assets/svgIcons";
import {ButtonCustom, VariantEnum} from "../../_common/ButtonCustom/ButtonCustom";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import {clsx} from "clsx";
import {getRandomIntInclusive} from "../../../helpers/getRandomIntInclusive";

const labels = [
    "spin again",
    "$5",
    "Tough luck",
    "$100",
    "$50",
    "$300"
]

export const SpinAndWin = observer(() => {
    const {
        appStore: {
            spinAndWinModal, setSpinAndWinModal,
            win, setWin, setWinValue
        }
    } = useStore()

    const ref = useRef<HTMLDivElement>(null!);
    useOutsideClick(ref, () => setSpinAndWinModal(false));

    const [angle, setAngle] = useState(0)

    const appRef = useRef<HTMLDivElement>(null!);

    //const [win, setWin] = useState(false)

    useGSAP((self) => {

            gsap.to(".pointer", {
                //x: angle * 10,
                rotate: `${angle * 60}deg`,
                duration: 2,
                //transform: `translate(-50%, -50%) rotate${angle * 60}deg`
                onComplete: () => {
                    if (angle % 6 === 1 || angle % 6 === 3 || angle % 6 === 4 || angle % 6 === 5) {
                        setWin(true)
                        setWinValue(labels[angle % 6])
                    }
                    if (angle % 6 === 2) {
                        setSpinAndWinModal(false)
                    }
                }
            })

        }, {
            scope: appRef,
            dependencies: [angle]
        }
    )

    const onSpin = () => {
        setAngle(angle + getRandomIntInclusive(16, 21))
    }

    const onGetReward = () => {
        setSpinAndWinModal(false)
    }


    return (
        <>
            {
                spinAndWinModal && (
                    <div className={style.spinAndWin}
                         ref={appRef}
                    >

                        <div className={style.card}
                             ref={ref}
                        >

                            <div className={style.cardHeader}>
                                <div className={style.cardHeaderLeft}>
                                    {svgIcons.trophy}
                                    <span>
                                       {win ? "you won the reward" : "SPIN and WIN Your reward"}
                                    </span>
                                </div>

                            </div>

                            <div className={style.cardBody}>

                                {
                                    win ? (
                                        <>
                                            <div className={style.cup}>
                                                {svgIcons.cup}
                                            </div>
                                            <p className={style.winLabel}>
                                                you won <span>{labels[angle % 6]}!</span>
                                            </p>
                                        </>
                                    ) : (
                                        <div className={style.wheelWrapper}>
                                            {svgIcons.spin_wheel}
                                            {svgIcons.wheel_center}
                                            <div className={clsx(style.pointer, "pointer")}
                                            >
                                                {svgIcons.wheel_pointer}
                                            </div>
                                            {
                                                labels.map((label, key) => (
                                                        <div key={key}
                                                             className={style.label}
                                                        >
                                                            <div style={{
                                                                transform: `rotate(${30 + key * 60}deg)`
                                                            }}>
                                                                <p>{label}</p>
                                                            </div>

                                                        </div>
                                                    )
                                                )
                                            }

                                        </div>
                                    )
                                }


                            </div>

                            {
                                win ? (
                                    <ButtonCustom label="Get a reward"
                                                  variant={VariantEnum.contained}
                                                  className={style.btn}
                                                  onClick={onGetReward}
                                    />
                                ) : (
                                    <>
                                        <ButtonCustom label="SPIN and WIN $$$"
                                                      variant={VariantEnum.contained}
                                                      className={style.btn}
                                                      onClick={onSpin}
                                        />

                                        <ButtonCustom label="Existing user?"
                                                      variant={VariantEnum.outlined}
                                                      className={style.btn}
                                        />
                                    </>
                                )
                            }




                        </div>

                    </div>
                )
            }
        </>

    )
})