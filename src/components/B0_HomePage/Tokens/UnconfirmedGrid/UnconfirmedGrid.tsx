import {IUnconfirmedToken} from "../data_unconfirmedToken";
import {FC} from "react";
import {useStore} from "../../../../store/rootStore";
import {observer} from "mobx-react-lite";
import style from "./UnconfirmedGrid.module.scss";
import {svgIcons} from "../../../../assets/svgIcons";
import {ButtonCustom} from "../../../_common/ButtonCustom/ButtonCustom";
import {IconButton} from "../../../_common/IconButton/IconButton";
import {clsx} from "clsx";

interface IUnconfirmedGrid {
    tokens: IUnconfirmedToken[]
    className?: string
}

export const UnconfirmedGrid: FC<IUnconfirmedGrid> = observer(({
                                                                   tokens,
                                                                   className,
                                                               }) => {
    const {
        appStore: {
            colorTheme, setShareModal,
        }
    } = useStore();

    return (
        <div className={clsx(
            style.unconfirmedGrid,
            Boolean(className) && className,
        )}>
            {
                tokens.map(({
                                src,
                                name,
                                twitter,
                                pledgeAmount,
                                followers,
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

                        <div className={style.nameWrapper}>
                            <p>{name}</p>

                            <a href={twitter}
                               target="_blank"
                               rel="noopener noreferrer nofollow"
                            >
                                {svgIcons.x_contained}
                            </a>
                        </div>

                        <div className={style.pledgeAmount}>
                            {svgIcons.solana}
                            <p>{pledgeAmount[0]}</p>
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
                            <ButtonCustom label="QUICK Pledge"
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