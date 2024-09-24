import style from "./ConfirmedListDesktop.module.scss";
import {FC} from "react";
import {observer} from "mobx-react-lite";
import {useStore} from "../../../../store/rootStore";
import {IConfirmedToken} from "../data_confirmedToken";
import {ConfirmedRow} from "../ConfirmedRow/ConfirmedRow";
import {clsx} from "clsx";

interface IConfirmedListDesktop {
    tokens: IConfirmedToken[]
    className?: string
}

export const ConfirmedListDesktop: FC<IConfirmedListDesktop> = observer(({
                                                                             tokens,
                                                                             className
                                                                         }) => {
    const {
        appStore: {
            colorTheme
        }
    } = useStore();

    return (
        <div className={clsx(
            style.confirmedListDesktop,
            Boolean(className) && className,
        )}>

            <div className={style.listHeader}>
                {
                    [
                        "# Listed",
                        "Created",
                        "Followers",
                        "Charity",
                        "Marketcap (24h)",
                        "Liquidity",
                        "Followers",
                        "Buy"
                    ].map((label, key) => (
                        <p key={key}>{label}</p>
                    ))
                }
            </div>

            <div className={style.listBody}>
                {
                    tokens.map((data, key) => (
                        <ConfirmedRow key={key}
                                      {...data}
                        />
                    ))
                }
            </div>

        </div>
    )
})