import style from "./ConfirmedListMobile.module.scss";
import {observer} from "mobx-react-lite";
import {useStore} from "../../../../store/rootStore";
import {clsx} from "clsx";
import {ColorThemeEnum} from "../../../../store/appStore";
import {FC} from "react";
import {IConfirmedToken} from "../data_confirmedToken";
import {svgIcons} from "../../../../assets/svgIcons";
import {IconButton} from "../../../_common/IconButton/IconButton";
import {ButtonCustom, VariantEnum} from "../../../_common/ButtonCustom/ButtonCustom";

interface IConfirmedListMobile {
    tokens: IConfirmedToken[]
    className?: string
}

export const ConfirmedListMobile: FC<IConfirmedListMobile> = observer(({
                                                                           tokens,
                                                                           className
                                                                       }) => {
    const {
        appStore: {
            colorTheme, setShareModal,
        }
    } = useStore();

    return (
        <div className={clsx({
                [style.confirmedListMobile]: true,
                [style.confirmedListMobile_light]: colorTheme === ColorThemeEnum.light,
            },
            Boolean(className) && className
        )}>
            <div className={style.inner}>

                <div className={style.left}>

                    <div className={style.tableHeader}>
                        {
                            [
                                "# Listed",
                            ].map((label, key) => (
                                <p key={key}>{label}</p>
                            ))
                        }
                    </div>

                    <div className={style.tableBody}>
                        {
                            tokens.map(({
                                            name,
                                            src,
                                            twitter,
                                        }, key) => (
                                <div key={key}
                                     className={style.row}
                                >

                                    <button className={style.addToFavoriteBtn}>
                                        {svgIcons.star}
                                    </button>
                                    <img src={src} alt=""/>
                                    <div className={style.info}>
                                        <div className={style.infoTop}>
                                            <p>{name}</p>
                                            {svgIcons.badgeCheck}
                                            <a href={twitter}
                                               target="_blank"
                                               rel="noopener noreferrer nofollow"
                                            >
                                                {svgIcons.x_contained}
                                            </a>
                                        </div>
                                        <p>$KRC</p>
                                    </div>

                                </div>
                            ))
                        }
                    </div>


                </div>

                <div className={style.right}>
                    <div className={style.rightInner}>

                        <div className={style.tableHeader}>
                            {
                                [
                                    "Created",
                                    "Followers",
                                    "Marketcap (24h)",
                                    "Current price",
                                    "Statistics",
                                    "Share",
                                    "Buy",
                                ].map((label, key) => (
                                    <p key={key}>{label}</p>
                                ))
                            }
                        </div>

                        <div className={style.tableBody}>
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
                                         className={style.row}
                                    >

                                        <div className={style.created}>
                                            {svgIcons.timer}
                                            <span>{created}</span>
                                        </div>

                                        <div className={style.followers}>
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

                                        <div className={style.marketcap}>
                                            {svgIcons.solana}
                                            <p>
                                                <span>{marketcap[0]}</span>
                                                <span>/{marketcap[1]}</span>
                                            </p>
                                        </div>

                                        <div className={style.currentPrice}>
                                            {svgIcons.solana}
                                            <p>
                                                <span>{currentPrice[0]}</span>
                                                <span>/{currentPrice[1]}</span>
                                            </p>
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

                                        <div className={style.share}>
                                            <IconButton icon={svgIcons.share}
                                                        className={style.shareBtn}
                                                        onClick={() => setShareModal(true)}
                                            />
                                        </div>


                                        <div className={style.buy}>
                                            <ButtonCustom label="Quick Buy"
                                                          variant={VariantEnum.outlined}
                                                          className={style.buyBtn}
                                            />
                                        </div>


                                    </div>
                                ))
                            }
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
})