import style from "./Trending.module.scss"
import {observer} from "mobx-react-lite";
import {useStore} from "../../../store/rootStore";
import {list} from "./data";
import {clsx} from "clsx";
import {ColorThemeEnum} from "../../../store/appStore";
import {Link} from "react-router-dom";

export const Trending = observer(() => {
    const {
        appStore: {
            colorTheme,
        }
    } = useStore()

    return (
        <div className={clsx({
            [style.trending]: true,
            [style.trending_light]: colorTheme === ColorThemeEnum.light,
        })}>

            <p className={style.title}>
                Trending
            </p>

            <div className={style.list}>
                {
                    [
                        ...list,
                        ...list,
                        ...list,
                        ...list,
                        ...list
                    ].map(({id, src, name, confirmed}, key) => (
                        <Link key={key}
                              to={confirmed ? `/tokenConfirmed/${id}` : `/tokenUnconfirmed/${id}`}
                              className={style.item}
                        >
                            <img src={src} alt=""/>
                            <p>{name}</p>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
})