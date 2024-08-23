import style from "./PledgeUnpledge.module.scss";
import {clsx} from "clsx";
import {useState} from "react";
import {EnableInsta} from "../../C_Modals/EnableInsta/EnableInsta";
import {svgIcons} from "../../../assets/svgIcons";
import {ButtonCustom, VariantEnum} from "../../_common/ButtonCustom/ButtonCustom";
import {AdvancedSettings} from "../../C_Modals/AdvancedSettings/AdvancedSettings";
import {GetTweet} from "../../C_Modals/GetTweet/GetTweet";

export const PledgeUnpledge = () => {
    const [tab, setTab] = useState(0)
    const [instaPledge, setInstaPledge] = useState(false);
    const [instaUnpledge, setInstaUnpledge] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [price, setPrice] = useState(0.25);
    const [advancedSettingsModal, setAdvancedSettings] = useState(false);
    const [getTweetModal, setGetTweetModal] = useState(false);


    const onInsta = () => {
        if (tab === 0) {
            instaPledge ? setInstaPledge(false) : setShowModal(true)
        } else {
            instaUnpledge ? setInstaUnpledge(false) : setShowModal(true)
        }
    }

    return (
        <div className={style.pledgeUnpledge}>

            <EnableInsta label={tab === 0 ? "Enable Insta Pledge" : "Enable Insta Unpledge"}
                         showModal={showModal}
                         onClose={() => setShowModal(false)}
                         onConfirm={
                             () => tab === 0 ? setInstaPledge(true) : setInstaUnpledge(true)
                         }
            />

            <AdvancedSettings showModal={advancedSettingsModal}
                              onClose={() => setAdvancedSettings(false)}
                              onSave={() => {}}
            />

            <GetTweet showModal={getTweetModal}
                      onClose={() => setGetTweetModal(false)}
            />

            <div className={style.header}>
                pledge / unpledge
            </div>

            <div className={style.tabs}>
                {
                    [
                        "pledge",
                        "unpledge",
                    ].map((label, key) => (
                        <button key={key}
                                onClick={() => setTab(key)}
                                className={clsx({
                                    [style.tab]: true,
                                    [style.tab_selected]: key === tab,
                                })}
                        >
                            <span>{label}</span>
                        </button>
                    ))
                }
            </div>

            <button className={clsx({
                [style.toggleWrapper]: true,
                [style.toggleWrapper_on]: tab === 0 ? instaPledge : instaUnpledge
            })}
                    onClick={onInsta}
            >
                <div className={style.switcher}/>
                <p>
                    {
                        tab === 0 ? "Insta Pledge" : "Insta Unpledge"
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
                        {tab === 0 ? "Amount to pledge in SOL" : "Amount to unpledge in SOL"}
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

            <button className={style.quickBuyBtn}>
                <span>{tab === 0 ? "Quick Pledge" : "Quick unpledge"}</span>
                {svgIcons.solana}
                <span>0.25</span>
            </button>

            <p className={style.description}>
                {
                    tab === 0
                        ? "Once you click on Quick Pledge, your transaction is sent immediately"
                        : "Once you click on Quick Unpledge, your transaction is sent immediately"
                }
            </p>

            <ButtonCustom label="Advanced Settings"
                          className={style.advancedSettingsBtn}
                          onClick={() => setAdvancedSettings(true)}
            />

            <div className={style.giftSection}>
                <div className={style.top}>
                    <div className={style.topLeft}>
                        <p>GIFT</p>
                        {svgIcons.boxUsd}
                    </div>
                    <div className={style.topRight}>
                        <span>BONUS </span><span>SOL 0.02</span>
                    </div>
                </div>
                <p className={style.description}>
                    Just have a tweet for points button
                </p>
            </div>

            <ButtonCustom label="GET TWEET"
                          className={style.getTweetBtn}
                          onClick={() => setGetTweetModal(true)}
            />

        </div>
    )
}