import style from "./FolderItem.module.scss";
import {FC} from "react";
import {IFavorite} from "../data";
import {useDrag} from "react-dnd";
import {DndItemTypes} from "../dnd.types";

interface ICollectedProps {
    isDragging: boolean
}

interface IFolderItem {
    folderItem: IFavorite
}

export const FolderItem: FC< IFolderItem> = ({folderItem}) => {

    // as source
    const [{isDragging}, dragSourceRef] = useDrag<any, any, ICollectedProps>({
        type: DndItemTypes.favoriteItem,
        item: folderItem,
        collect: (monitor) => ({
            isDragging: monitor.isDragging()
        }),
        end: (item, monitor) => { //(optional) обработчик конца перетаскивания
            console.log(monitor.didDrop())
        },
    })

    return (
        <div className={style.folderItem}
             ref={dragSourceRef}
        >
            <img src={folderItem.src} alt=""/>
        </div>
    )
}