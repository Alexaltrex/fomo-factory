import style from "./OwnerPanelAfterLaunch.module.scss";
import {AccountInfo} from "./AccountInfo/AccountInfo";
import {svgIcons} from "../../assets/svgIcons";
import {ButtonCustom, VariantEnum} from "../_common/ButtonCustom/ButtonCustom";
import {clsx} from "clsx";

export const OwnerPanelAfterLaunch = () => {
    return (
        <div className={style.ownerPanelAfterLaunch}>

            <h2 className={style.title}>
                Owner's panel
            </h2>

            <AccountInfo/>

            <p className={style.tickerLabel}>
                Add a ticker
            </p>

            <div className={style.rewardSection}>

                <div className={style.header}>
                    <p>
                        <span>MY Reward</span>
                        {svgIcons.trophy}
                    </p>
                    <p>
                        Reward <span>SOL 1,020</span>
                    </p>
                </div>

                <ButtonCustom label="Claim reward"
                              variant={VariantEnum.contained}
                              className={style.claimBtn}
                />

                <div className={style.card}>

                    <div className={style.cardHeader}>
                        <p>
                            Market Cap $100M
                        </p>
                        <p>
                            you will get <span>$1,000,000</span>
                        </p>

                    </div>

                    <p className={style.value}>
                        $60K
                    </p>

                    <div className={style.scaleWrapper}>

                        {
                            Array.from(({length: 99}), (v, k) => k).map((k) => (
                                <div key={k}
                                     className={style.tick}
                                     style={{
                                         left: `${k + 1}%`
                                     }}
                                />
                            ))
                        }

                        {/*<div className={style.line}/>*/}
                        <div className={style.labels}>
                            {
                                [
                                    "$0", "$200K", "$400K", "$600K", "$800K", "$1M",
                                ].map((value, key) => (
                                    <p key={key}
                                       className={style.label}
                                       style={{
                                           left: `${key * 20}%`
                                       }}
                                    >
                                        {value}
                                    </p>
                                ))
                            }
                        </div>

                    </div>


                </div>

            </div>

        </div>
    )
}