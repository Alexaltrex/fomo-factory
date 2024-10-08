import style from "./MainInfo.module.scss"
import src from "../../../assets/png/0.png";
import {svgIcons} from "../../../assets/svgIcons";
import {IconButton} from "../../_common/IconButton/IconButton";
import {observer} from "mobx-react-lite";
import {useStore} from "../../../store/rootStore";
import {clsx} from "clsx";
import graph from "../../../assets/png/graph.png";

export const MainInfo = observer(() => {
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
        <div className={style.mainInfo}>

            <div className={style.header}>
                Main info
            </div>

            <div className={style.content}>

                <div className={style.contentMain}>

                    <div className={style.left}>
                        <img src={src} alt=""/>
                        <div className={style.right}>

                            <div className={style.top}>
                                <p>{name}</p>
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

                    <div className={style.right}>
                        <IconButton icon={svgIcons.star}
                                    onClick={addToFavorite}
                        />
                        <IconButton icon={svgIcons.share}
                                    onClick={onShare}
                        />
                    </div>

                </div>

                <div className={style.contentOther}>
                    <div className={style.inner}>

                        <div className={clsx(style.columnCell, style.followers)}>
                            <div>
                                <p>Followers</p>
                                <div>
                                    {svgIcons.x_outlined}
                                    <p>2.4m</p>
                                </div>
                            </div>
                        </div>

                        <div className={clsx(style.columnCell, style.twitterJoined)}>
                            <div>
                                <p>Twitter joined</p>
                                <div>
                                   <p>12.09.21</p>
                                </div>
                            </div>
                        </div>


                        <div className={clsx(style.columnCell, style.totalPledged)}>
                            <div>
                                <p>Total Pledged</p>
                                <div>
                                    {svgIcons.solana}
                                    <p>0.064</p>
                                </div>
                            </div>
                        </div>

                        <div className={clsx(style.columnCell, style.saved)}>
                            <div>
                                <p>Saved</p>
                                <div>
                                    {svgIcons.star}
                                    <p>56</p>
                                </div>
                            </div>
                        </div>

                        <div className={clsx(style.columnCell, style.pledgers)}>
                            <div>
                                <p>Pledgers</p>
                                <div>
                                    {svgIcons.users}
                                    <p>76</p>
                                </div>
                            </div>
                        </div>

                        <div className={clsx(style.columnCell, style.comments)}>
                            <div>
                                <p>Comments</p>
                                <div>
                                    {svgIcons.comments}
                                    <p>42</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

            <div className={style.connectAccount}>
                <p>Connect account</p>
            </div>

            <img src={graph} alt="" className={style.graph}/>

        </div>
    )
})