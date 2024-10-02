import style from "./TradesGrid.module.scss"
import {observer} from "mobx-react-lite";
import {useStore} from "../../../../store/rootStore";
import src0 from "../../../../assets/png/0.png";
import {StarButton} from "../../../B0_HomePage/Tokens/StarButton/StarButton";
import {ViewModeEnum} from "../../../../store/appStore";
import {svgIcons} from "../../../../assets/svgIcons";
import {ButtonCustom} from "../../../_common/ButtonCustom/ButtonCustom";
import {IconButton} from "../../../_common/IconButton/IconButton";

export const TradesGrid = observer(() => {
    const {
        appStore: {
            setShareModal,
        }
    } = useStore()

    return (
        <div className={style.tradesGrid}>
            {
                Array.from(({length: 50}), (v, k) => k).map((key) => (
                    <div key={key}
                         className={style.card}
                    >

                        <div className={style.imgWrapper}>
                            <img src={src0} alt=""/>
                            <StarButton viewMode={ViewModeEnum.grid}/>
                        </div>

                        <div className={style.name}>
                            <p>Billie Eilisht</p>
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

                        <div className={style.twitterJoined}>
                            <p>Twitter joined</p>
                            <p>12.09.21</p>
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
                            <ButtonCustom label="QUICK pledge"
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