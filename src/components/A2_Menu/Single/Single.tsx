import style from "./Single.module.scss"
import {IFavorite} from "../../A2_Sidebar/data";
import React, {FC, useRef} from "react";
import {useDrag, useDrop} from "react-dnd";
import {DndItemTypes} from "../../A2_Sidebar/dnd.types";
import {clsx} from "clsx";
import {observer} from "mobx-react-lite";
import {useStore} from "../../../store/rootStore";
import "../../../assets/styles/dnd.scss";

interface ICollectedProps {
    isDragging: boolean
}

interface ISingle {
    single: IFavorite
}
export const Single: FC<ISingle> = observer(({single}) => {
    const {
        appStore: {
            setCreateFolderModal,
            setSourceFavorite, setTargetFavorite,
        }
    } = useStore()

    const {id, src, name, folderId} = single;

    // as target
    const [{canDrop, isOver}, dropTargetRef] = useDrop<IFavorite, any, any>(() => ({
        accept: DndItemTypes.favoriteItem,
        drop: (item, monitor) => {
            const sourceItem = item;
            const targetItem = single;

            // 1. single to single
            // 4. folderItem to single
            if (sourceItem.id !== targetItem.id && !targetItem.folderId) {
                setCreateFolderModal(true);
                setSourceFavorite(item);
                setTargetFavorite(single)
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
        item: single,
        collect: (monitor) => ({
            isDragging: monitor.isDragging()
        }),
        end: (item, monitor) => { //(optional) обработчик конца перетаскивания
            //console.log(monitor.didDrop())
            //console.log(monitor.getDropResult())
        },
    })

    const ref = useRef<HTMLDivElement>(null);
    dragSourceRef(dropTargetRef(ref));

    return (
        <div className={clsx({
            [style.single]: true,
            //[style.single_canDrop]: canDrop,
            //[style.single_isOver]: isOver,
            [style.single_isDragging]: isDragging,
        },
            canDrop && "singleCanDropMobile",
            isOver && "singleIsOverMobile",
            )}
             ref={ref}
        >
            <img src={src} alt=""/>
            <p>{name}</p>
        </div>
    )
})