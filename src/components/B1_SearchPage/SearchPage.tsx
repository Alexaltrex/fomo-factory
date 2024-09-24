import style from "./SearchPage.module.scss";
import {observer} from "mobx-react-lite";
import {useStore} from "../../store/rootStore";
import {searchResult} from "./data";
import {svgIcons} from "../../assets/svgIcons";
import {clsx} from "clsx";
import {Card} from "./Card/Card";
import {Row} from "./Row/Row";

export const SearchPage = observer(() => {
    const {
        appStore: {
            colorTheme
        }
    } = useStore();

    return (
        <div className={style.searchPage}>

            <div className={style.tableMobile}>
                {
                    [
                        ...searchResult,
                        ...searchResult,
                        ...searchResult,
                        ...searchResult,
                    ].map((item, key) => (
                        <Card key={key} {...item}/>
                    ))
                }
            </div>


            <div className={style.tableDesktop}>

                <div className={style.tableHeader}>
                    {
                        [
                            "Listed",
                            "Type",
                            "Created",
                            "Followers",
                            "Liquidity / Pledge"
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
                        ].map((item, key) => (
                            <Row key={key} {...item}/>
                        ))
                    }
                </div>

            </div>
        </div>
    )
})