import style from "./UnconfirmedListDesktop.module.scss"
import {IUnconfirmedToken} from "../data_unconfirmedToken";
import {FC} from "react";
import {useStore} from "../../../../store/rootStore";
import {observer} from "mobx-react-lite";
import {UnconfirmedRow} from "../UnconfirmedRow/UnconfirmedRow";
import {clsx} from "clsx";

interface IUnconfirmedListDesktop {
    tokens: IUnconfirmedToken[]
    className?: string
}

export const UnconfirmedListDesktop: FC<IUnconfirmedListDesktop> = observer(({
                                                                                 tokens,
                                                                                 className
                                                                             }
) => {
    const {
        appStore: {
            colorTheme
        }
    } = useStore();

    return (
        <div className={clsx(
            style.unconfirmedListDesktop,
            Boolean(className) && className,
        )}>

            <div className={style.listHeader}>
                {
                    [
                        "# Listed",
                        "Followers",
                        "Twitter Joined date",
                        "Pledge",
                        "Statistics",
                        "Share",
                        "Pledge"
                    ].map((label, key) => (
                        <p key={key}>{label}</p>
                    ))
                }
            </div>

            <div className={style.listBody}>
                {
                    tokens.map((data, key) => (
                        <UnconfirmedRow key={key}
                                        {...data}
                        />
                    ))
                }
            </div>
        </div>
    )
})