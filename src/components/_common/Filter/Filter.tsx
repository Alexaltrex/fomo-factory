import style from "./Filter.module.scss"
import {observer} from "mobx-react-lite";
import {svgIcons} from "../../../assets/svgIcons";
import {FC, useRef, useState} from "react";
import {clsx} from "clsx";
import {useStore} from "../../../store/rootStore";
import {ColorThemeEnum} from "../../../store/appStore";
import {useOutsideButNotOnTargetClick} from "../../../hooks/useOutsideClick";

interface IFilter {
    className?: string
}
export const Filter: FC<IFilter> = observer(({
                                                 className
                                             }) => {
    const {
        appStore: {
            colorTheme
        }
    } = useStore();

    const [menu, setMenu] = useState(false);
    const [newTrades, setNewTrades] = useState(true);
    const [currentPrice, setCurrentPrice] = useState(false);
    const [creationTime, setCreationTime] = useState(true);
    const [ascending, setAscending] = useState(true);

    const ref = useRef<HTMLDivElement>(null!);
    const btnRef = useRef<HTMLButtonElement>(null!);
    useOutsideButNotOnTargetClick(ref, btnRef, () => setMenu(false));

    return (
        <div className={clsx({
            [style.filter]: true,
            [style.filter_light]: colorTheme === ColorThemeEnum.light,
        },
            Boolean(className) && className
            )}
             ref={ref}
        >

            <button className={clsx({
                [style.btn]: true,
                [style.btn_menu]: menu,
            })}
                    onClick={() => {
                        setMenu(!menu);
                    }}
                    ref={btnRef}
            >
                {svgIcons.filter}
                <span>Filter</span>
            </button>

            {
                menu && (
                    <div className={style.menu}>
                        <div className={style.menuTop}>
                            {
                                [
                                    {
                                        label: "New Trades",
                                        value: newTrades,
                                        onClick: () => setNewTrades(!newTrades)
                                    },
                                    {
                                        label: "Current price",
                                        value: currentPrice,
                                        onClick: () => setCurrentPrice(!currentPrice)
                                    },
                                    {
                                        label: "Creation time",
                                        value: creationTime,
                                        onClick: () => setCreationTime(!creationTime)
                                    },

                                ].map(({label, value, onClick}, key) => (
                                    <div key={key}
                                         className={style.item}>
                                        <p>{label}</p>
                                        <button className={clsx({
                                            [style.btn]: true,
                                            [style.btn_selected]: value,
                                        })}
                                                onClick={() => onClick()}

                                        />
                                    </div>
                                ))
                            }
                        </div>

                        <div className={style.menuBottom}>
                            {
                                [
                                    {
                                        label: 'Ascending',
                                        value: ascending,
                                        onClick: () => setAscending(true)
                                    },
                                    {
                                        label: 'Descending',
                                        value: !ascending,
                                        onClick: () => setAscending(false)
                                    },
                                ].map(({label, value, onClick}, key) => (
                                    <div key={key}
                                         className={style.item}>
                                        <p>{label}</p>
                                        <button className={clsx({
                                            [style.btn]: true,
                                            [style.btn_selected]: value,
                                        })}
                                                onClick={() => onClick()}

                                        />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                )
            }

        </div>
    )
})