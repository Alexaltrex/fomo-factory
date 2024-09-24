import {ISearchResultItem} from "../data";
import {FC} from "react";
import style from "./Row.module.scss";
import {svgIcons} from "../../../assets/svgIcons";
import {ViewModeEnum} from "../../../store/appStore";
import {StarButton} from "../../B0_HomePage/Tokens/StarButton/StarButton";
import {clsx} from "clsx";

export const Row: FC<ISearchResultItem> = ({
                                               image,
                                               name,
                                               twitter,
                                               confirmed,
                                               statistics,
                                               price,
                                           }) => {
    return (
        <div className={style.row}>

            <div className={style.infoCell}>
                <StarButton viewMode={ViewModeEnum.list}/>
                <img src={image} alt=""/>
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

            <div className={style.confirmedStatusCell}>
                <div className={clsx({
                    [style.status]: true,
                    [style.status_confirmed]: confirmed,
                })}>
                    <div/>
                    <span>{confirmed ? "Confirmed" : "UNConfirmed"}</span>
                </div>
            </div>

            <div className={style.created}>
                {svgIcons.timer}
                <p>1 d</p>
            </div>

            <div className={style.statisticsCell}>
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

            <div className={style.priceCell}>
                {svgIcons.solana}
                <span>{price}</span>
            </div>

        </div>
    )
}