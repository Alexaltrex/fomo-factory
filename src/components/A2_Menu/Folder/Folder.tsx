import style from "./Folder.module.scss"
import {FC, useRef, useState} from "react";
import {useDrop} from "react-dnd";
import {observer} from "mobx-react-lite";
import {useStore} from "../../../store/rootStore";
import {clsx} from "clsx";
import {svgIcons} from "../../../assets/svgIcons";
import {useOutsideButNotOnTargetClick} from "../../../hooks/useOutsideClick";
import {IFavorite, IFavoriteFolder} from "../../A2_Sidebar/data";
import {DndItemTypes} from "../../A2_Sidebar/dnd.types";
import {FolderItem} from "../../A2_Sidebar/FolderItem/FolderItem";
import "../../../assets/styles/dnd.scss";

interface IFolder {
    favoriteFolder: IFavoriteFolder
}

export const Folder: FC<IFolder> = observer(({favoriteFolder}) => {
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

    return (


        <div className={clsx({
                [style.folder]: true,
            },
            canDrop && "singleCanDropMobile",
            isOver && "singleIsOverMobile",
        )}
             style={{
                 gridTemplateRows: `repeat(${favorites.length % 2 === 0 ? 0.5 * favorites.length : 0.5 * (favorites.length + 1)}, 1fr)`
             }}
             ref={dropTargetRef}
        >
            <div className={style.left}>
                <div className={style.items}>
                    {
                        favorites.map((item) => (
                            <FolderItem key={item.id} folderItem={item}/>
                        ))
                    }
                </div>

                <p className={style.name}>
                    {folderName}
                </p>
            </div>
            <div className={style.right}>
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
                                }}
                        >
                            {icon}
                        </button>
                    ))
                }
            </div>


        </div>


    )
})