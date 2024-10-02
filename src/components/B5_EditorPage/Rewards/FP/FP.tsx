import style from "./FP.module.scss"
import {clsx} from "clsx";
import {svgIcons} from "../../../../assets/svgIcons";
import {ButtonCustom, VariantEnum} from "../../../_common/ButtonCustom/ButtonCustom";

export const FP = () => {
    return (
        <div className={style.fp}>

            <div className={style.left}>

                <div className={clsx(style.pointsSection, style.wrapper)}>

                    <div className={style.title}>
                        <p>Points</p>
                    </div>

                    <div className={style.items}>
                        {
                            [
                                {
                                    label: "Total points",
                                    value: "10,000,000",
                                },
                                {
                                    label: "Current points multiplier",
                                    value: "8.8X",
                                },
                            ].map(({label, value}, key) => (
                                <div key={key}
                                     className={style.item}
                                >
                                    <p>{label}</p>
                                    <p>{value}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>

                <div className={clsx(style.weeklySection, style.wrapper)}>

                    <div className={style.title}>
                        <p>
                            <span>WEEKLY TRADING VOLUME</span>
                            {svgIcons.info}
                        </p>
                        <p>2x multiplier</p>
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

                        <div className={style.line}/>
                        <div className={style.labels}>
                            {
                                [
                                    "$0", "$20", "$40", "$60", "$80", "$100",
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

                <div className={clsx(style.dailySection, style.wrapper)}>

                    <p className={style.title}>
                        DAILY TRADING STREAK multiplier
                    </p>

                    <div className={style.scaleWrapper}>
                        {
                            Array.from(({length: 107}), (v, k) => k).map((k) => (
                                <div key={k}
                                     className={style.tick}
                                     style={{
                                         left: `${(k + 1) * 100 / 108}%`
                                     }}
                                />
                            ))
                        }
                        <div className={style.line}/>
                        {
                            Array.from(({length: 7}), (v, k) => k).map(k => (
                                <div key={k}
                                     className={clsx({
                                         [style.icon]: true,
                                         [style.icon_selected]: k < 4,

                                     })}
                                     style={{
                                         left: `${(400 / 108) + k * (10000 / (6 * 108))}%`
                                     }}
                                >
                                    {svgIcons.check}
                                </div>
                            ))
                        }
                        {
                            [
                                "1.1X",
                                "1.2X",
                                "1.4X",
                                "1.6X",
                                "1.8X",
                                "2.2X",
                                "2.5X",
                            ].map((label, key) => (
                                <p key={key}
                                   className={clsx({
                                       [style.label]: true,
                                       [style.label_selected]: key < 4,
                                   })}
                                   style={{
                                       left: `${(400 / 108) + key * (10000 / (6 * 108))}%`
                                   }}
                                >
                                    {label}
                                </p>
                            ))
                        }
                    </div>

                </div>

                <div className={clsx(style.redeemSection, style.wrapper)}>
                    <p>
                        <span>rP for lottery tickets</span>
                        {svgIcons.info}
                    </p>
                    <p>
                        20,000
                    </p>
                    <p>redeem</p>
                </div>


            </div>

            <div className={style.right}>

                <div className={style.wrapper}>

                    <p className={style.title}>
                        points
                    </p>

                    <div className={style.list}>
                        {
                            [
                                {
                                    label: "Transactions",
                                    value: "2000 PTS",
                                },
                                {
                                    label: "REferrals",
                                    value: "2000 PTS",
                                },
                                {
                                    label: "volume",
                                    value: "2000 PTS",
                                },
                                {
                                    label: "tweet",
                                    value: "2000 PTS",
                                },
                                {
                                    label: "Transactions",
                                    value: "2000 PTS",
                                },
                                {
                                    label: "REferrals",
                                    value: "2000 PTS",
                                },
                                {
                                    label: "volume",
                                    value: "2000 PTS",
                                },
                                {
                                    label: "tweet",
                                    value: "2000 PTS",
                                },
                                {
                                    label: "total",
                                    value: "2000 PTS",
                                }
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

                <ButtonCustom label="Leaderboard"
                              variant={VariantEnum.contained}
                              className={style.btn}
                />


            </div>

        </div>
    )
}