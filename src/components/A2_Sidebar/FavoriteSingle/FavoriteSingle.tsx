import style from "./FavoriteSingle.module.scss"
import {useDrag, useDrop} from "react-dnd";
import {DndItemTypes} from "../dnd.types";
import {IFavorite} from "../data";
import React, {FC, useRef} from "react";
import {clsx} from "clsx";
import {observer} from "mobx-react-lite";
import {useStore} from "../../../store/rootStore";
import "../../../assets/styles/dnd.scss";

interface ICollectedProps {
    isDragging: boolean
}

interface IFavoriteSingle {
    favoriteSingle: IFavorite
}

export const FavoriteSingle: FC<IFavoriteSingle> = observer(({favoriteSingle}) => {
    const {
        appStore: {
            setCreateFolderModal,
            setSourceFavorite, setTargetFavorite,
        }
    } = useStore()

    const {id, src} = favoriteSingle;

    // as target
    const [{canDrop, isOver}, dropTargetRef] = useDrop<IFavorite, any, any>(() => ({
        accept: DndItemTypes.favoriteItem,
        drop: (item, monitor) => {
            const sourceItem = item;
            const targetItem = favoriteSingle;

            // console.log(sourceItem.id)
            // console.log(targetItem.id)

            // 1. single to single
            // 4. folderItem to single
            if (sourceItem.id !== targetItem.id && !targetItem.folderId) {
                setCreateFolderModal(true);
                setSourceFavorite(item);
                setTargetFavorite(favoriteSingle)
            }

        },
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        }),
    }))

    // as source
    const [{isDragging}, dragSourceRef] = useDrag<any, any, ICollectedProps>({
        type: DndItemTypes.favoriteItem,
        item: favoriteSingle,
        collect: (monitor) => ({
            isDragging: monitor.isDragging()
        }),
        end: (item, monitor) => { //(optional) обработчик конца перетаскивания
            console.log(monitor.didDrop())
            //console.log(monitor.getDropResult())
        },
    })

    const ref = useRef<HTMLDivElement>(null);
    dragSourceRef(dropTargetRef(ref));

    return (
        <div className={clsx(
            {
                [style.favoriteSingle]: true,
                [style.favoriteSingle_isDragging]: isDragging,
            },
            canDrop && "singleCanDropDesktop",
            isOver && "singleIsOverDesktop",
        )}
             ref={ref}
        >
            <img src={src} alt=""/>
        </div>
    )
})