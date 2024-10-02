import style from "./TokensList.module.scss"
import {IConfirmedToken} from "../../../B0_HomePage/Tokens/data_confirmedToken";
import {FC} from "react";
import {clsx} from "clsx";
import {StarButton} from "../../../B0_HomePage/Tokens/StarButton/StarButton";
import {svgIcons} from "../../../../assets/svgIcons";
import src0 from "../../../../assets/png/0.png";
import {IconButton} from "../../../_common/IconButton/IconButton";
import {observer} from "mobx-react-lite";
import {useStore} from "../../../../store/rootStore";
import {ButtonCustom, VariantEnum} from "../../../_common/ButtonCustom/ButtonCustom";
interface ITokensList {
    className?: string
}

export const TokensList: FC<ITokensList> = observer(({className}) => {
    const {
        appStore: {
            setShareModal,
        }
    } = useStore()

    return (
        <div className={clsx(
            style.tokensList,
            Boolean(className) && className,
        )}
        >

            <div className={style.listHeader}>
                {
                    [
                        "# Listed",
                        "Created",
                        "Followers",
                        "Marketcap (24h)",
                        "My income",
                        "Current price",
                        "Statistics",
                        "Share",
                        "Buy"
                    ].map((label, key) => (
                        <p key={key}>{label}</p>
                    ))
                }
            </div>

            <div className={style.listBody}>
                {
                    Array.from(({length: 50}), (v, k) => k).map((key) => (
                        <div key={key}
                             className={style.listItem}
                        >

                            <div className={style.infoCell}>
                                <StarButton/>
                                <img src={src0} alt=""/>
                                <div className={style.info}>
                                    <div className={style.infoTop}>
                                        <p>Keanu Rekanu</p>
                                        {svgIcons.badgeCheck}
                                        <a href="#"
                                           target="_blank"
                                           rel="noopener noreferrer nofollow"
                                        >
                                            {svgIcons.x_contained}
                                        </a>
                                    </div>
                                    <p>$KRC</p>
                                </div>
                            </div>

                            <div className={style.timer}>
                                {svgIcons.timer}<p>1 d</p>
                            </div>

                            <div className={style.followers}>
                                <div className={style.followerItem}>
                                    {svgIcons.x_outlined}
                                    <span>2.4m</span>
                                </div>
                            </div>

                            <div className={style.marketcap}>
                                {svgIcons.solana}
                                <p>
                                    <span>{0.653}</span>
                                    <span>/$3.5</span>
                                </p>
                            </div>

                            <div className={style.myIncome}>
                                {svgIcons.solana}<span>0.653</span>
                            </div>

                            <div className={style.currentPrice}>
                                {svgIcons.solana}
                                <p>
                                    <span>{0.653}</span>
                                    <span>/$3.5</span>
                                </p>
                            </div>

                            <div className={style.statistics}>
                                {
                                    [
                                        {
                                            icon: svgIcons.star,
                                            value: 55
                                        },
                                        {
                                            icon: svgIcons.users,
                                            value: 44
                                        },
                                        {
                                            icon: svgIcons.comments,
                                            value: 33
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

                            <div className={style.buy}>
                                <ButtonCustom label="Quick Buy"
                                              variant={VariantEnum.outlined}
                                              className={style.buyBtn}
                                />
                            </div>




                        </div>
                    ))
                }
            </div>
        </div>
    )
})