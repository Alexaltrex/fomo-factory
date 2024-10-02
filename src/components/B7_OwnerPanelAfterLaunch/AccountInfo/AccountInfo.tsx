import style from "./AccountInfo.module.scss"
import {observer} from "mobx-react-lite";
import {useStore} from "../../../store/rootStore";
import src from "../../../assets/png/0.png";
import {svgIcons} from "../../../assets/svgIcons";
import {IconButton} from "../../_common/IconButton/IconButton";

export const AccountInfo = observer(() => {
    const {
        appStore: {
            setShareModal
        }
    } = useStore();

    const name = "Billie Eilisht";
    const twitter = "#";
    const address = "Jb8Jb8j5OJb8j5OJb8j5OJb8j5O321"
    const onCopy = () => navigator.clipboard.writeText(address);

    const addToFavorite = () => {
    }
    const onShare = () => setShareModal(true);

    return (
        <div className={style.accountInfo}>

            <div className={style.mainInfo}>

                <div className={style.account}>

                    <div className={style.accountLeft}>
                        <img src={src} alt=""/>
                        <div className={style.right}>

                            <div className={style.top}>
                                <p>{name}</p>
                                {svgIcons.badgeCheck}
                                <a href={twitter}
                                   target="_blank"
                                   rel="noopener noreferrer nofollow"
                                >
                                    {svgIcons.x_contained}
                                </a>
                            </div>

                            <div className={style.bottom}>
                                <p>
                                    {address.slice(0, 3) + "..." + address.slice(address.length - 3, address.length)}
                                </p>
                                <button onClick={onCopy}>
                                    {svgIcons.copy}
                                </button>
                            </div>
                        </div>
                    </div>

                </div>

                <div className={style.buttons}>
                    <IconButton icon={svgIcons.star}
                                onClick={addToFavorite}
                    />
                    <IconButton icon={svgIcons.share}
                                onClick={onShare}
                    />
                </div>

            </div>

            <div className={style.statistic}>

                <div className={style.followers}>
                    <div>
                        <p>Followers</p>
                        <p>
                            {svgIcons.x_outlined}<span>2.4m</span>
                        </p>
                    </div>
                </div>

                <div className={style.totalPledged}>
                    <div>
                        <p>Total Pledged</p>
                        <p>
                            {svgIcons.solana}
                            <span>0.064</span>
                        </p>
                    </div>
                </div>

                <div className={style.Saved}>
                    <div>
                        <p>Saved</p>
                        <p>
                            {svgIcons.star}
                            <span>56</span>
                        </p>
                    </div>
                </div>

                <div className={style.pledgers}>
                    <div>
                        <p>Pledgers</p>
                        <p>
                            {svgIcons.users}
                            <span>76</span>
                        </p>
                    </div>
                </div>

                <div className={style.pledgers}>
                    <div>
                        <p>Comments</p>
                        <p>
                            {svgIcons.comments}
                            <span>42</span>
                        </p>
                    </div>
                </div>

            </div>
        </div>
    )
})