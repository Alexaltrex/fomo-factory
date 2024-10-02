import style from "./Cash.module.scss";
import {CelebsRefered} from "../../../C_Modals/CelebsRefered/CelebsRefered";
import {svgIcons} from "../../../../assets/svgIcons";
import {IconButton} from "../../../_common/IconButton/IconButton";
import {ButtonCustom, VariantEnum} from "../../../_common/ButtonCustom/ButtonCustom";
import {useState} from "react";

export const Cash = () => {

    const code = "Z7Xy9Qp4MvB2Lk6H";
    const [celebsReferedModal, setCelebsReferedModal] = useState(false)


    return (
        <div className={style.cash}>

            <CelebsRefered celebsReferedModal={celebsReferedModal}
                           setCelebsReferedModal={(value) => setCelebsReferedModal(value)}
            />

            <p className={style.title}>
                referrals
            </p>

            <div className={style.content}>

                <div className={style.referrals}>

                    {/*<p className={style.title}>*/}
                    {/*    referrals*/}
                    {/*</p>*/}

                    <div className={style.referralsTop}>
                        <div className={style.codeSection}>
                            <div className={style.top}>

                                <p className={style.code}>
                                    {svgIcons.copy}
                                    <span>code</span>
                                </p>

                                <p className={style.value}>
                                    {code}
                                </p>

                                <IconButton icon={svgIcons.copy2}
                                            className={style.copyBtn}
                                            onClick={() => navigator.clipboard.writeText(code)}
                                />

                            </div>

                            <ButtonCustom label="GENERATE NEW"
                                          className={style.generateNewBtn}
                            />
                        </div>

                        <div className={style.labelAndValue}>
                            <p>Codes used</p>
                            <p>5</p>
                        </div>

                        <div className={style.claimSection}>
                            {
                                [
                                    {
                                        label: "Referral bonus",
                                        value: "20,00 SOL",
                                    },
                                    {
                                        label: "Celeb referral bonus",
                                        value: "2000,00 SOL",
                                    },
                                ].map(({label, value}, key) => (
                                    <div key={key}
                                         className={style.row}
                                    >
                                        <div className={style.left}>
                                            <p>{label}</p>
                                            <p>{value}</p>
                                        </div>

                                        <ButtonCustom className={style.claimBtn}
                                                      label="claim"
                                        />
                                    </div>
                                ))
                            }
                        </div>

                        <ButtonCustom label="Celebs refered "
                                      className={style.celebsReferedBtn}
                                      variant={VariantEnum.contained}
                                      onClick={() => setCelebsReferedModal(true)}
                        />
                    </div>

                    {/*<div className={style.referralsBottom}>*/}
                    {/*    <p className={style.title}>*/}
                    {/*        Lottery ticket*/}
                    {/*    </p>*/}
                    {/*    <div className={style.labelAndValue}>*/}
                    {/*        <p>Lottery ticket left</p>*/}
                    {/*        <p>2</p>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>

                <div className={style.tradingDiscount}>

                    <div className={style.tradingDiscountTitle}>
                        <p>TRADING DISCOUNT</p>
                        {svgIcons.info}
                    </div>

                    <div className={style.list}>
                        {
                            [
                                {
                                    label: "Trading Discount used",
                                    value: "10.00 SOL",
                                },
                                {
                                    label: "Trading Discount Remaining",
                                    value: "11.00 SOL",
                                },
                            ].map(({label, value}, key) => (
                                <div key={key}
                                     className={style.row}
                                >
                                    <p>{label}</p>
                                    <p>{value}</p>
                                </div>
                            ))
                        }
                    </div>

                </div>

            </div>


        </div>
    )
}