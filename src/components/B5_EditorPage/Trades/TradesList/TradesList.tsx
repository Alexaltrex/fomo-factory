import style from "./TradesList.module.scss"
import {observer} from "mobx-react-lite";
import {useStore} from "../../../../store/rootStore";
import {StarButton} from "../../../B0_HomePage/Tokens/StarButton/StarButton";
import src0 from "../../../../assets/png/0.png";
import {svgIcons} from "../../../../assets/svgIcons";
import {IconButton} from "../../../_common/IconButton/IconButton";
import {ButtonCustom, VariantEnum} from "../../../_common/ButtonCustom/ButtonCustom";

export const TradesList = observer(() => {
    const {
        appStore: {
            setShareModal,
        }
    } = useStore()

    return (
        <div className={style.tradesList}>

            <div className={style.listHeader}>
                {
                    [
                        "# Listed",
                        "Followers",
                        "Twitter Joined date",
                        "Pledge Amount",
                        "Statistics",
                        "Share",
                        "Pledge"
                    ].map((label, key) => (
                        <p key={key}>{label}</p>
                    ))
                }
            </div>

            <div className={style.listBody}>
                {
                    Array.from(({length: 50}), (v, k) => k).map((key) => (
                        <div key={key}
                             className={style.listItem}
                        >

                            <div className={style.infoCell}>
                                <StarButton/>
                                <img src={src0} alt=""/>
                                <div className={style.info}>
                                    <div className={style.infoTop}>
                                        <p>Keanu Rekanu</p>
                                        {/*{svgIcons.badgeCheck}*/}
                                        <a href="#"
                                           target="_blank"
                                           rel="noopener noreferrer nofollow"
                                        >
                                            {svgIcons.x_contained}
                                        </a>
                                    </div>
                                    {/*<p>$KRC</p>*/}
                                </div>
                            </div>

                            <div className={style.followers}>
                                <div className={style.followerItem}>
                                    {svgIcons.x_outlined}
                                    <span>2.4m</span>
                                </div>
                            </div>

                            <div className={style.twitterJoinedDate}>
                                <p>12 Sep, 2021</p>
                            </div>

                            <div className={style.pledgeAmount}>
                                {svgIcons.solana}
                                <p>
                                    <span>{0.653}</span>
                                    <span>/$3.5</span>
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

                            <div className={style.share}>
                                <IconButton icon={svgIcons.share}
                                            className={style.shareBtn}
                                            onClick={() => setShareModal(true)}
                                />
                            </div>

                            <div className={style.pledge}>
                                <ButtonCustom label="Quick pledge"
                                              variant={VariantEnum.outlined}
                                              className={style.pledgeBtn}
                                />
                            </div>

                        </div>
                    ))
                }
            </div>

        </div>
    )
})