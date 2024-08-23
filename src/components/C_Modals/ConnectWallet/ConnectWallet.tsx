import style from "./ConnectWallet.module.scss";
import {svgIcons} from "../../../assets/svgIcons";
import React, {useState} from "react";
import {icons} from "./icons";
import {observer} from "mobx-react-lite";
import {useStore} from "../../../store/rootStore";
import {clsx} from "clsx";
import {ColorThemeEnum} from "../../../store/appStore";
import {wallets} from "./data";

export const ConnectWallet = observer(() => {
    const {
        appStore: {
            colorTheme, setShowConnectWallet, setWalletAddress,
        }
    } = useStore();

    const [selectedWallet, setSelectedWallet] = useState(-1);
    const onClose = () => setShowConnectWallet(false);
    const onSign = () => {
        setWalletAddress("0x1ABC7154748D1CE5144478CDEB574AE244B939B5");
        onClose();
    }

    return (
        <div className={clsx({
            [style.connectWallet]: true,
            [style.connectWallet_light]: colorTheme === ColorThemeEnum.light,
        })}>

                <div className={style.card}>

                    <div className={style.cardHeader}>
                        {svgIcons.wallet}
                        <span>Connect wallet</span>
                        <button onClick={() => onClose()}
                        >
                            {svgIcons.close}
                        </button>
                    </div>

                    <div className={style.description}>
                        {
                            selectedWallet === -1 ? (
                                <p>
                                    To proceed, you have to connect your wallet first. Thank you for your cooperation
                                </p>
                            ) : (
                                <>
                                    <div className={style.icon}>
                                        {colorTheme === ColorThemeEnum.dark ? wallets[selectedWallet].icon : wallets[selectedWallet].icon_light}
                                    </div>
                                    <p>
                                        Sign message to verify your account! To finish connecting you must sign a
                                        message in your wallet to verify that you are the owner
                                    </p>
                                </>

                            )
                        }

                    </div>

                    {
                        selectedWallet === -1 ? (
                            <div className={style.walletList}>
                                {
                                    wallets.map(({icon, icon_light, label, detected}, key) => (
                                        <button key={key}
                                                onClick={() => setSelectedWallet(key)}
                                        >
                                            <div className={style.iconWrapper}>
                                                {colorTheme === ColorThemeEnum.dark ? icon : icon_light}
                                            </div>
                                            <p className={style.label}>
                                                {label}
                                            </p>
                                            {
                                                detected && (
                                                    <p className={style.detected}>
                                                        Detected
                                                    </p>
                                                )
                                            }
                                        </button>
                                    ))
                                }
                            </div>
                        ) : (
                            <button className={style.signButton}
                                    onClick={onSign}
                            >
                                {svgIcons.circleNotch}
                            </button>
                        )
                    }


                </div>

        </div>
    )
})