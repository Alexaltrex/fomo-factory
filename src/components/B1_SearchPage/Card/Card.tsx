import {FC} from "react";
import {ISearchResultItem} from "../data";
import style from "./Card.module.scss"
import {StarButton} from "../../B0_HomePage/Tokens/StarButton/StarButton";
import {ViewModeEnum} from "../../../store/appStore";
import {svgIcons} from "../../../assets/svgIcons";
import {clsx} from "clsx";

export const Card: FC<ISearchResultItem> = ({
                                                image,
                                                name,
                                                twitter,
                                                confirmed,
                                                statistics,
                                                price,
                                            }) => {
    return (
        <div className={style.card}>

            <div className={style.imgWrapper}>
                <img src={image} alt=""/>
                <StarButton viewMode={ViewModeEnum.grid}/>
            </div>

            <div className={style.nameWrapper}>
                <p>{name}</p>

                {confirmed && svgIcons.badgeCheck}

                <a href={twitter}
                   target="_blank"
                   rel="noopener noreferrer nofollow"
                >
                    {svgIcons.x_contained}
                </a>
            </div>

            <div className={style.price}>
                {svgIcons.solana}
                <p>{price}</p>
            </div>

            <div className={clsx({
                [style.status]: true,
                [style.status_confirmed]: confirmed,
            })}>
                <div/>
                <span>
                  {confirmed ? "Confirmed" : "UNConfirmed"}
                </span>
            </div>

            <div className={style.created}>
                <p>Created</p>
                <p>1d</p>
            </div>

            <div className={style.liquidity}>
                <div>
                    <p>Liquidity/</p>
                    <p>Pledge</p>
                </div>
                <div>
                    {svgIcons.solana}
                    <p>0.653</p>
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

        </div>
    )
}