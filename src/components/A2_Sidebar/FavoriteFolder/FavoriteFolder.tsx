import style from "./FavoriteFolder.module.scss"
import {FC, useRef, useState} from "react";
import {IFavorite, IFavoriteFolder} from "../data";
import {FolderItem} from "../FolderItem/FolderItem";
import {useDrop} from "react-dnd";
import {DndItemTypes} from "../dnd.types";
import {observer} from "mobx-react-lite";
import {useStore} from "../../../store/rootStore";
import {clsx} from "clsx";
import {svgIcons} from "../../../assets/svgIcons";
import {useOutsideButNotOnTargetClick} from "../../../hooks/useOutsideClick";

interface IFavoriteFolderComponent {
    favoriteFolder: IFavoriteFolder
}

export const FavoriteFolder: FC<IFavoriteFolderComponent> = observer(({favoriteFolder}) => {
    const {id, folderName, favorites} = favoriteFolder

    const {
        appStore: {
            moveSingleToFolder,
            moveFolderItemToAnotherFolder,
            setRenameFolderModal,
            setDeleteFolderModal,
            setFolderToEdit,
        }
    } = useStore()

    // as target
    const [{canDrop, isOver}, dropTargetRef] = useDrop<IFavorite, any, any>(() => ({
        accept: DndItemTypes.favoriteItem,
        drop: (item, monitor) => {
            const sourceItem = item;
            const folderId = id;

            // 2. single to folder
            if (!sourceItem.folderId) {
                moveSingleToFolder({
                    single: sourceItem,
                    folderId,
                })
            }

            // 3. folderItem to another folder
            if (sourceItem.folderId && sourceItem.folderId !== folderId) {
                moveFolderItemToAnotherFolder({
                    folderItem: sourceItem,
                    folderId
                })
            }
        },
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        }),
    }))

    // hover
    const [hover, setHover] = useState(false);

    // menu
    const [menu, setMenu] = useState(false);

    const ref = useRef(null!);
    const targetRef = useRef(null!);

    useOutsideButNotOnTargetClick(ref, targetRef, () => setMenu(false))


    return (
        <div className={style.favoriteFolderWrapper}>

            <div ref={ref}>
                <div className={clsx(
                    style.favoriteFolder,
                    canDrop && "folderCanDropDesktop",
                    isOver && "folderIsOverDesktop",
                )}
                     style={{
                         gridTemplateRows: `repeat(${favorites.length % 2 === 0 ? 0.5 * favorites.length : 0.5 * (favorites.length + 1)}, 1fr)`
                     }}
                     ref={dropTargetRef}
                     onMouseEnter={() => setHover(true)}
                     onMouseLeave={() => setHover(false)}
                     onClick={() => {
                         setMenu(!menu)
                         setHover(false)
                     }}
                >
                    {
                        favorites.map((item) => (
                            <FolderItem key={item.id} folderItem={item}/>
                        ))
                    }
                </div>
            </div>


            {
                hover && !menu && (
                    <div className={style.folderName}>
                        <p>{folderName}</p>
                    </div>
                )
            }

            {
                menu && (
                    <div className={style.menu}
                         ref={targetRef}
                    >
                        {
                            [
                                {
                                    icon: svgIcons.cog,
                                    label: "Rename folder",
                                    onClick: () => setRenameFolderModal(true)
                                },
                                {
                                    icon: svgIcons.trashAlt,
                                    label: "Delete folder",
                                    onClick: () => setDeleteFolderModal(true)
                                },
                            ].map(({icon, label, onClick}, key) => (
                                <button key={key}
                                        onClick={() => {
                                            onClick()
                                            setFolderToEdit(favoriteFolder)
                                            setMenu(false)
                                        }}
                                >
                                    {icon}<p>{label}</p>
                                </button>
                            ))
                        }
                    </div>
                )
            }

        </div>

    )
})