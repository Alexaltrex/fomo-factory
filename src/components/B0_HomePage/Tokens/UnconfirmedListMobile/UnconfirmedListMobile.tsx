import {FC} from "react";
import {IUnconfirmedToken} from "../data_unconfirmedToken";
import {observer} from "mobx-react-lite";
import {useStore} from "../../../../store/rootStore";
import style from "./UnconfirmedListMobile.module.scss"
import {svgIcons} from "../../../../assets/svgIcons";
import {IconButton} from "../../../_common/IconButton/IconButton";
import {ButtonCustom, VariantEnum} from "../../../_common/ButtonCustom/ButtonCustom";
import {clsx} from "clsx";
import {StarButton} from "../StarButton/StarButton";

interface IUnconfirmedListMobile {
    tokens: IUnconfirmedToken[]
    className?: string
}

export const UnconfirmedListMobile: FC<IUnconfirmedListMobile> = observer(({
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
            style.unconfirmedListMobile,
            Boolean(className) && className,
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

                                    <StarButton/>

                                    <img src={src} alt=""/>

                                    <p>{name}</p>

                                    <a href={twitter}
                                       target="_blank"
                                       rel="noopener noreferrer nofollow"
                                    >
                                        {svgIcons.x_contained}
                                    </a>

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
                                    "Followers",
                                    "Pledge Amount",
                                    "Statistics",
                                    "Share",
                                    "Pledge"
                                ].map((label, key) => (
                                    <p key={key}>{label}</p>
                                ))
                            }
                        </div>

                        <div className={style.tableBody}>
                            {
                                tokens.map(({
                                                followers,
                                                pledgeAmount,
                                                statistics,
                                            }, key) => (
                                    <div key={key}
                                         className={style.row}
                                    >

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

                                        <div className={style.pledgeAmount}>
                                            {svgIcons.solana}
                                            <p>
                                                <span>{pledgeAmount[0]}</span>
                                                <span>/{pledgeAmount[1]}</span>
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

                                        <div className={style.pledge}>
                                            <ButtonCustom label="Quick Pledge"
                                                          variant={VariantEnum.outlined}
                                                          className={style.quickPledgeBtn}
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