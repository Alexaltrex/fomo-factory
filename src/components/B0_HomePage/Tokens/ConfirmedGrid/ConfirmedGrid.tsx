import style from "./ConfirmedGrid.module.scss"
import {FC} from "react";
import {IConfirmedToken} from "../data_confirmedToken";
import {observer} from "mobx-react-lite";
import {svgIcons} from "../../../../assets/svgIcons";
import {ButtonCustom} from "../../../_common/ButtonCustom/ButtonCustom";
import {IconButton} from "../../../_common/IconButton/IconButton";
import {useStore} from "../../../../store/rootStore";
import {clsx} from "clsx";

interface IConfirmedGrid {
    tokens: IConfirmedToken[]
    className?: string
}

export const ConfirmedGrid: FC<IConfirmedGrid> = observer(({
                                                               tokens,
                                                               className
                                                           }) => {
    const {
        appStore: {
            colorTheme, setShareModal,
        }
    } = useStore();

    return (
        <div className={clsx(
            style.confirmedGrid,
            Boolean(className) && className,
        )}>
            {
                tokens.map(({
                                src,
                                name,
                                twitter,
                                created,
                                followers,
                                marketcap,
                                currentPrice,
                                statistics,
                            }, key) => (
                    <div key={key}
                         className={style.card}
                    >

                        <div className={style.imgWrapper}>
                            <img src={src} alt=""/>
                            <button className={style.addToFavoritesBtn}>
                                {svgIcons.star}
                            </button>
                        </div>

                        <p className={style.name}>{name}</p>

                        <div className={style.info}>
                            <p>$BEC</p>

                            {svgIcons.badgeCheck}

                            <a href={twitter}
                               target="_blank"
                               rel="noopener noreferrer nofollow"
                            >
                                {svgIcons.x_contained}
                            </a>
                        </div>

                        <div className={style.price}>
                            {svgIcons.solana}
                            <p>{currentPrice[0]}</p>
                        </div>

                        <div className={style.followers}>
                            <div className={style.followersInner}>
                                {
                                    [
                                        {
                                            icon: svgIcons.x_outlined,
                                            value: followers.x,
                                        },
                                        {
                                            icon: svgIcons.instagram,
                                            value: followers.instagram,
                                        },
                                        {
                                            icon: svgIcons.tiktok,
                                            value: followers.tiktok,
                                        },
                                    ].map(({value, icon}, key) => (
                                        <div key={key}
                                             className={style.followerItem}
                                        >
                                            {icon}
                                            <span>{value}</span>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>

                        <div className={style.prices}>
                            <div className={style.pricesRow}>
                                <p className={style.label}>
                                    Marketcap
                                </p>
                                <p className={style.value}>
                                    {svgIcons.solana}<span>{marketcap[0]}</span>
                                </p>
                            </div>
                            <div className={style.pricesRow}>
                                <p className={style.label}>
                                    Price
                                </p>
                                <p className={style.value}>
                                    {svgIcons.solana}<span>{currentPrice[0]}</span>
                                </p>
                            </div>
                            <div className={style.pricesRow}>
                                <p className={style.label}>
                                    Created
                                </p>
                                <p className={style.value}>
                                    <span>{`${created} ago`}</span>
                                </p>
                            </div>
                        </div>

                        <div className={style.statistics}>
                            {
                                [
                                    {
                                        icon: svgIcons.star,
                                        value: statistics.star
                                    },
                                    {
                                        icon: svgIcons.users,
                                        value: statistics.users
                                    },
                                    {
                                        icon: svgIcons.comments,
                                        value: statistics.comments
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