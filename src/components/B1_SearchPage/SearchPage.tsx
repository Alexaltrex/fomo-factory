import style from "./SearchPage.module.scss";
import {observer} from "mobx-react-lite";
import {useStore} from "../../store/rootStore";
import {searchResult} from "./data";
import {svgIcons} from "../../assets/svgIcons";
import {clsx} from "clsx";

export const SearchPage = observer(() => {
    const {
        appStore: {
            colorTheme
        }
    } = useStore();

    return (
        <div className={style.searchPage}>

            <div className={style.tableMobile}>
                <div className={style.inner}>

                    <div className={style.left}>

                        <div className={style.tableHeader}>
                            {
                                [
                                    "Listed",
                                ].map((label, key) => (
                                    <p>{label}</p>
                                ))
                            }
                        </div>

                        <div className={style.tableBody}>
                            {
                                [
                                    ...searchResult,
                                    ...searchResult,
                                    ...searchResult,
                                    ...searchResult,
                                ].map(({
                                           image,
                                           name,
                                           twitter, confirmed,
                                       }, key) => (
                                    <div key={key}
                                         className={style.row}
                                    >

                                        <button className={style.addToFavoriteBtn}>
                                            {svgIcons.star}
                                        </button>
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
                                ))
                            }
                        </div>

                    </div>

                    <div className={style.right}>
                        <div className={style.rightInner}>

                            <div className={style.tableHeader}>
                                {
                                    [
                                        "Type",
                                        "Statistics",
                                        "Price"
                                    ].map((label, key) => (
                                        <p key={key}>{label}</p>
                                    ))
                                }
                            </div>

                            <div className={style.tableBody}>
                                {
                                    [
                                        ...searchResult,
                                        ...searchResult,
                                        ...searchResult,
                                        ...searchResult,
                                    ].map(({
                                               confirmed,
                                               statistics,
                                               price
                                           }, key) => (
                                        <div key={key}
                                             className={style.row}
                                        >
                                            <div className={style.confirmedStatusCell}>
                                                <div className={clsx({
                                                    [style.status]: true,
                                                    [style.status_confirmed]: confirmed,
                                                })}>
                                                    <div/>
                                                    <span>
                                            {
                                                confirmed ? "Confirmed" : "UNConfirmed"
                                            }
                                        </span>
                                                </div>
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
                                    ))
                                }
                            </div>

                        </div>
                    </div>

                </div>


            </div>


            <div className={style.tableDesktop}>

                <div className={style.tableHeader}>
                    {
                        [
                            "Listed",
                            "Type",
                            "Statistics",
                            "Price"
                        ].map((label, key) => (
                            <p key={key}>{label}</p>
                        ))
                    }
                </div>

                <div className={style.tableBody}>
                    {
                        [
                            ...searchResult,
                            ...searchResult,
                            ...searchResult,
                            ...searchResult,
                        ].map(({
                                   image,
                                   name,
                                   twitter, confirmed,
                                   statistics,
                                   price
                               }, key) => (
                            <div key={key}
                                 className={style.row}
                            >

                                <div className={style.infoCell}>
                                    <button className={style.addToFavoriteBtn}>
                                        {svgIcons.star}
                                    </button>
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
                                        <span>
                                            {
                                                confirmed ? "Confirmed" : "UNConfirmed"
                                            }
                                        </span>
                                    </div>
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
                        ))
                    }
                </div>

            </div>
        </div>
    )
})