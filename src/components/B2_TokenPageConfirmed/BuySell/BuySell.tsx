import style from "./BuySell.module.scss";
import {clsx} from "clsx";
import {useState} from "react";
import {EnableInsta} from "../../C_Modals/EnableInsta/EnableInsta";
import {svgIcons} from "../../../assets/svgIcons";
import {ButtonCustom, VariantEnum} from "../../_common/ButtonCustom/ButtonCustom";
import {AdvancedSettings} from "../../C_Modals/AdvancedSettings/AdvancedSettings";
import {GetTweet} from "../../C_Modals/GetTweet/GetTweet";
import {observer} from "mobx-react-lite";
import {useStore} from "../../../store/rootStore";
import {v4 as uuidv4} from 'uuid';
import {TransactionStatusEnum} from "../../../store/cryptoStore";
import downloadSrc from "../../../assets/png/download.png"
import {Tweet} from "../../C_Modals/Tweet/Tweet";
import {Tabs} from "../../_common/Tabs/Tabs";

export const BuySell = observer(() => {
    const {
        cryptoStore: {
            transactionAlerts,
            addTransactionAlert,
            changeTransactionAlert,
            closeTransactionAlert,
        }
    } = useStore()


    const [tab, setTab] = useState(0);
    const [instaBuy, setInstaBuy] = useState(false);
    const [instaSell, setInstaSell] = useState(false);
    const [showEnableInstaModal, setShowEnableInstaModal] = useState(false);
    const [price, setPrice] = useState(0.25);
    const [advancedSettingsModal, setAdvancedSettings] = useState(false);
    const [getTweetModal, setGetTweetModal] = useState(false);
    const [tweetModal, setTweetModal] = useState(false);

    const onInsta = () => {
        if (tab === 0) {
            instaBuy ? setInstaBuy(false) : setShowEnableInstaModal(true)
        } else {
            instaSell ? setInstaSell(false) : setShowEnableInstaModal(true)
        }
    }

    const onQuick = () => {
        const id = uuidv4();

        addTransactionAlert(
            id,
            "Transaction sent"
        )
       setTimeout(() => {
           closeTransactionAlert(id)
       }, 3000)
    }


    return (
        <div className={style.buySell}>

            <EnableInsta label={tab === 0 ? "Enable Insta Buy" : "Enable Insta Sell"}
                         showModal={showEnableInstaModal}
                         onClose={() => setShowEnableInstaModal(false)}
                         onConfirm={
                             () => tab === 0 ? setInstaBuy(true) : setInstaSell(true)
                         }
            />

            <AdvancedSettings showModal={advancedSettingsModal}
                              onClose={() => setAdvancedSettings(false)}
                              onSave={() => {
                              }}
            />

            <GetTweet showModal={getTweetModal}
                      onClose={() => setGetTweetModal(false)}
            />

            <Tweet show={tweetModal}
                   onClose={() => setTweetModal(false)}
            />

            <div className={style.header}>
                buy / sell
            </div>

            <Tabs tabs={[
                "BUY",
                "Sell",
            ]}
                  tab={tab}
                  onClick={(tab) => setTab(tab)}
                  className={style.tabs}
            />

            <button className={clsx({
                [style.toggleWrapper]: true,
                [style.toggleWrapper_on]: tab === 0 ? instaBuy : instaSell
            })}
                    onClick={onInsta}
            >
                <div className={style.switcher}/>
                <p>
                    {
                        tab === 0 ? "Insta Buy" : "Insta Sell"
                    }
                </p>
            </button>

            <div className={style.prices}>
                {
                    [
                        0.25, 1, 5, 10
                    ].map((value, key) => (
                        <button key={key}
                                className={clsx({
                                    [style.btn]: true,
                                    [style.btn_selected]: value === price,
                                })}
                                onClick={() => setPrice(value)}
                        >
                            {svgIcons.solana}
                            <span>{value}</span>
                        </button>
                    ))
                }
            </div>

            <div className={style.amount}>
                <div className={style.left}>
                    {svgIcons.solana}
                    <span>
                        {tab === 0 ? "Amount to buy in SOL" : "Amount to sell in SOL"}
                    </span>
                </div>
                <ButtonCustom label="MAX"
                              variant={VariantEnum.contained}
                              className={style.maxBtn}
                />
            </div>

            <p className={style.tokenPrice}>
                <span>1 Billie Eilisht = </span><span>0.03SOL</span>
            </p>

            <button className={style.quickBuyBtn}
                    onClick={onQuick}
            >
                <span>{tab === 0 ? "Quick Buy" : "Quick Sell"}</span>
                {svgIcons.solana}
                <span>0.25</span>
            </button>

            <p className={style.description}>
                {
                    tab === 0
                        ? "Once you click on Quick Buy, your transaction is sent immediately"
                        : "Once you click on Quick Sell, your transaction is sent immediately"
                }
            </p>

            <ButtonCustom label="Advanced Settings"
                          className={style.advancedSettingsBtn}
                          onClick={() => setAdvancedSettings(true)}
            />

            <div className={style.checksSection}>
                {
                    [
                        {
                            icon: svgIcons.check_green,
                            label: "ff Launched"
                        },
                        {
                            icon: svgIcons.check_green,
                            label: "Authority revoked"
                        },
                        {
                            icon: svgIcons.check_green,
                            label: "Liquidity locked"
                        },
                        {
                            icon: svgIcons.close_red,
                            label: "No creator allocation"
                        },
                    ].map(({icon, label}, key) => (
                        <div key={key}
                        >
                            {icon}
                            <p>{label}</p>
                        </div>
                    ))
                }
            </div>

            <div className={style.shareSection}>
                <p>Share your P&L</p>
                <div>
                    <button onClick={() => setTweetModal(true)}
                    >
                        <p>TWEET</p>
                        <img src={downloadSrc} alt=""/>
                    </button>
                    <p>✦ 200</p>
                </div>
            </div>


            {/*<div className={style.giftSection}>*/}
            {/*    <div className={style.top}>*/}
            {/*        <div className={style.topLeft}>*/}
            {/*            <p>GIFT</p>*/}
            {/*            {svgIcons.boxUsd}*/}
            {/*        </div>*/}
            {/*        <div className={style.topRight}>*/}
            {/*            <span>BONUS </span><span>SOL 0.02</span>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    <p className={style.description}>*/}
            {/*        Just have a tweet for points button*/}
            {/*    </p>*/}
            {/*</div>*/}

            {/*<ButtonCustom label="GET TWEET"*/}
            {/*              className={style.getTweetBtn}*/}
            {/*              onClick={() => setGetTweetModal(true)}*/}
            {/*/>*/}

        </div>
    )
})