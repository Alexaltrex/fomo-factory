import {IUnconfirmedToken} from "../data_unconfirmedToken";
import {FC, useState} from "react";
import style from "./UnconfirmedRow.module.scss"
import {observer} from "mobx-react-lite";
import {useStore} from "../../../../store/rootStore";
import {clsx} from "clsx";
import {ColorThemeEnum} from "../../../../store/appStore";
import {svgIcons} from "../../../../assets/svgIcons";
import {IconButton} from "../../../_common/IconButton/IconButton";
import {ButtonCustom, VariantEnum} from "../../../_common/ButtonCustom/ButtonCustom";

export const UnconfirmedRow: FC<IUnconfirmedToken> = observer(({
                                                                   src,
                                                                   name,
                                                                   twitter,
                                                                   followers,
                                                                   pledgeAmount,
                                                                   statistics,
                                                                   holders,
                                                               }) => {
    const {
        appStore: {
            colorTheme, setShareModal,
        }
    } = useStore();

    return (
        <div className={clsx({
            [style.unconfirmedRow]: true,
            [style.unconfirmedRow_light]: colorTheme === ColorThemeEnum.light,
        })}>

            <div className={style.row}>

                <div className={style.listed}>

                    <button className={style.starBtn}>
                        {svgIcons.star}
                    </button>

                    <img src={src} alt=""/>

                    <p>{name}</p>

                    <a href={twitter}
                       target="_blank"
                       rel="noopener noreferrer nofollow"
                    >
                        {svgIcons.x_contained}
                    </a>

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

        </div>
    )
})