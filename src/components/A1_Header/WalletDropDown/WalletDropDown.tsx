import style from "./WalletDropDown.module.scss"
import {svgIcons} from "../../../assets/svgIcons";
import {useRef, useState} from "react";
import {useOutsideButNotOnTargetClick} from "../../../hooks/useOutsideClick";
import {observer} from "mobx-react-lite";
import {useStore} from "../../../store/rootStore";
import {clsx} from "clsx";
import {ColorThemeEnum} from "../../../store/appStore";

export const WalletDropDown = observer(() => {
    const {
        appStore: {
            colorTheme,
            walletAddress, setWalletAddress,
        }
    } = useStore();

    const [showMenu, setShowMenu] = useState(false);

    const ref = useRef<HTMLDivElement>(null!);
    const targetRef = useRef<HTMLButtonElement>(null!);

    useOutsideButNotOnTargetClick(ref, targetRef, () => setShowMenu(false))

    return (
        <>
            {
                walletAddress && (
                    <div className={clsx({
                        [style.walletDropDown]: true,
                        [style.walletDropDown_light]: colorTheme === ColorThemeEnum.light,
                    })}
                         ref={ref}
                    >
                        <button className={style.btn}
                                onClick={() => setShowMenu(!showMenu)}
                                ref={targetRef}
                        >
                            {svgIcons.wallet}
                            <p>
                                {walletAddress.slice(0, 4) + "..." + walletAddress.slice(walletAddress.length - 4, walletAddress.length)}
                            </p>
                        </button>

                        {
                            showMenu && (
                                <div className={style.menu}>
                                    {
                                        [
                                            {
                                                icon: svgIcons.copy,
                                                label: "Copy address",
                                                onClick: () => {
                                                    setShowMenu(false);
                                                }
                                            },
                                            {
                                                icon: svgIcons.wallet,
                                                label: "Change wallet",
                                                onClick: () => {
                                                    setShowMenu(false);
                                                }
                                            },
                                            {
                                                icon: svgIcons.logout,
                                                label: "Disconnect",
                                                onClick: () => {
                                                    setWalletAddress(null);
                                                    setShowMenu(false);
                                                }
                                            },
                                        ].map(({icon, label, onClick}, key) => (
                                            <button key={key}
                                                    onClick={() => onClick()}
                                            >
                                                {icon}
                                                <span>{label}</span>
                                            </button>
                                        ))
                                    }
                                </div>
                            )

                        }
                    </div>
                )
            }
        </>

    )
})