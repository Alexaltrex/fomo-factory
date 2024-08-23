import style from "./HowToPlay.module.scss";
import {observer} from "mobx-react-lite";
import {useStore} from "../../../store/rootStore";
import {useRef} from "react";
import {useOutsideClick} from "../../../hooks/useOutsideClick";
import {svgIcons} from "../../../assets/svgIcons";
import {IconButton} from "../../_common/IconButton/IconButton";
import {ButtonCustom, VariantEnum} from "../../_common/ButtonCustom/ButtonCustom";
import {useNavigate} from "react-router-dom";

export const HowToPlay = observer(() => {
    const {
        appStore: {
            howToPlayModal, setHowToPlayModal,
        }
    } = useStore();

    const ref = useRef<HTMLDivElement>(null!);
    const onClose = () => setHowToPlayModal(false);
    useOutsideClick(ref, onClose);

    const navigate = useNavigate();

    return (
        <>
            {
                howToPlayModal && (
                    <div className={style.howToPlay}>
                        <div className={style.card}
                             ref={ref}
                        >

                            <div className={style.cardHeader}>
                                <div className={style.cardHeaderLeft}>
                                    {svgIcons.light_bulb}
                                    <span>How to Play?</span>
                                </div>
                                <IconButton icon={svgIcons.close}
                                            className={style.closeBtn}
                                            onClick={onClose}
                                />
                            </div>

                            <p className={style.description}>
                                Below you will find instructions on “How to play?”. If you have any questions, you
                                can <span>ask for help</span>
                            </p>

                            <div className={style.list}>
                                {
                                    [
                                        {
                                            icon: svgIcons.howToPlay_0,
                                            label: "Pledge",
                                            description: "After distributing 100 of our tokens, they will be listed on a decentralized exchange (DEX), allowing you to trade them freely",

                                        },
                                        {
                                            icon: svgIcons.howToPlay_1,
                                            label: "Share link to celeb to join",
                                            description: "After distributing 100 of our tokens, they will be listed on a decentralized exchange (DEX), allowing you to trade them freely",

                                        },
                                        {
                                            icon: svgIcons.howToPlay_2,
                                            label: "Buy/sell freely",
                                            description: "After distributing 100 of our tokens, they will be listed on a decentralized exchange (DEX), allowing you to trade them freely",

                                        },
                                    ].map(({
                                               icon,
                                               label,
                                               description
                                           }, key) => (
                                        <div key={key}
                                             className={style.item}
                                        >
                                            <div className={style.icon}>
                                                {icon}
                                            </div>
                                            <div className={style.right}>
                                               <p>{label}</p>
                                               <p>{description}</p>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>

                            <ButtonCustom label="Go to the Editor’s panel"
                                          className={style.goToBtn}
                                          variant={VariantEnum.contained}
                                          onClick={() => {
                                              navigate("/editor")
                                              onClose()
                                          }}
                            />

                        </div>
                    </div>
                )
            }
        </>

    )
})