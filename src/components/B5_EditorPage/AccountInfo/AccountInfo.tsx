import style from "./AccountInfo.module.scss"
import {observer} from "mobx-react-lite";
import {useStore} from "../../../store/rootStore";
import src from "../../../assets/png/0.png";
import {svgIcons} from "../../../assets/svgIcons";
import {IconButton} from "../../_common/IconButton/IconButton";
import {clsx} from "clsx";
import {useState} from "react";
import {EditProfileModal} from "./EditProfileModal/EditProfileModal";

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

    const [editProfileModal, setEditProfileModal] = useState(false);


    return (
        <div className={style.accountInfo}>

            <EditProfileModal open={editProfileModal}
                              onClose={() => setEditProfileModal(false)}
            />

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


                    <button className={style.editBtn}
                            onClick={() => setEditProfileModal(true)}
                    >
                        {svgIcons.pen}
                        <span>Edit</span>
                    </button>

                    {/*<button className={style.editBtn}*/}
                    {/*        //onClick={() => {}}*/}
                    {/*>*/}
                    {/*    {svgIcons.externalLink}*/}
                    {/*    <span>Follow</span>*/}
                    {/*</button>*/}

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
                <div className={style.inner}>

                    {
                        [
                            {
                                label: "Coins Held",
                                value: "123"
                            },
                            {
                                label: "Coins Created",
                                value: "123"
                            },
                            {
                                label: "Followers",
                                value: "21.1K"
                            },
                            {
                                label: "Followings",
                                value: "1.1K"
                            },
                        ].map(({label, value}, key) => (
                            <div key={key}
                                 className={style.cell}
                            >
                                <div className={style.cellInner}>
                                    <p>{label}</p>
                                    <p>{value}</p>
                                </div>
                            </div>
                        ))
                    }


                </div>
            </div>
        </div>
    )
})