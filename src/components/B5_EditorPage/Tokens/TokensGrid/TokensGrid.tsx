import style from "./TokensGrid.module.scss"
import {StarButton} from "../../../B0_HomePage/Tokens/StarButton/StarButton";
import {ViewModeEnum} from "../../../../store/appStore";
import src0 from "../../../../assets/png/0.png";
import {svgIcons} from "../../../../assets/svgIcons";
import {clsx} from "clsx";
import {ButtonCustom} from "../../../_common/ButtonCustom/ButtonCustom";
import {IconButton} from "../../../_common/IconButton/IconButton";
import {observer} from "mobx-react-lite";
import {useStore} from "../../../../store/rootStore";

export const TokensGrid = observer(() => {
    const {
        appStore: {
            setShareModal,
        }
    } = useStore()


    return (
        <div className={style.tokensGrid}>
            {

                    Array.from(({length: 50}), (v, k) => k).map((key) => (
                        <div key={key}
                             className={style.card}
                        >

                            <div className={style.imgWrapper}>
                                <img src={src0} alt=""/>
                                <StarButton viewMode={ViewModeEnum.grid}/>
                            </div>

                            <p className={style.name}>Billie Eilisht</p>

                            <div className={style.info}>
                                <p>$BEC</p>

                                {svgIcons.badgeCheck}

                                <a href="#"
                                   target="_blank"
                                   rel="noopener noreferrer nofollow"
                                >
                                    {svgIcons.x_contained}
                                </a>
                            </div>

                            <div className={style.price}>
                                {svgIcons.solana}
                                <p>0.064</p>
                            </div>

                            <div className={style.followers}>
                                <p className={style.label}>Followers</p>
                                <div className={style.value}
                                >
                                    {svgIcons.x_outlined}
                                    <span>2.4m</span>
                                </div>
                            </div>

                            <div className={style.pricesRow}>
                                <p className={style.label}>
                                    Charity
                                </p>
                                <p className={style.value}>
                                    <span>$369.5</span>
                                </p>
                            </div>

                            <div className={clsx(style.pricesRow, style.myIncome)}>
                                <p className={style.label}>
                                    My income
                                </p>
                                <p className={style.value}>
                                    {svgIcons.solana}<span>0.653</span>
                                </p>
                            </div>

                            <div className={style.pricesRow}>
                                <p className={style.label}>
                                    Marketcap
                                </p>
                                <p className={style.value}>
                                    {svgIcons.solana}<span>0.653</span>
                                </p>
                            </div>

                            <div className={style.pricesRow}>
                                <p className={style.label}>
                                    Liquidity
                                </p>
                                <p className={style.value}>
                                    {svgIcons.solana}<span>0.653</span>
                                </p>
                            </div>

                            <div className={style.pricesRow}>
                                <p className={style.label}>
                                    Created
                                </p>
                                <p className={style.value}>
                                    <span>1 d ago</span>
                                </p>
                            </div>

                            <div className={style.statistics}>
                                {
                                    [
                                        {
                                            icon: svgIcons.star,
                                            value: 55
                                        },
                                        {
                                            icon: svgIcons.users,
                                            value: 44
                                        },
                                        {
                                            icon: svgIcons.comments,
                                            value: 33
                                        },
                                    ].map(({icon, value}, key) => (
                                            <div key={key}
                                                 className={style.statisticsItem}
                                            >
                                                {icon}<span>{value}</span>
                                            </div>
                                        )
                                    )
                                }
                            </div>

                            <div className={style.bottom}>
                                <ButtonCustom label="QUICK buy"
                                              className={style.quickPledgeBtn}

                                />
                                <IconButton icon={svgIcons.share}
                                            className={style.shareBtn}
                                            onClick={() => setShareModal(true)}
                                />
                            </div>

                        </div>
                    ))
            }
        </div>
    )
})