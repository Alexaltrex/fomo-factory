import style from "./SourceSingle.module.scss"
import {useDrag, useDrop} from "react-dnd";
import {DndItemTypes} from "../dnd.types";
import {favoriteSingles, IFavorite} from "../data";
import React, {FC, useRef} from "react";
import {clsx} from "clsx";

interface ICollectedProps {
    isDragging: boolean
}

interface ISourceSingle {
    favoriteSingle: IFavorite
}

export const SourceSingle: FC<ISourceSingle> = ({favoriteSingle}) => {
    const {id, src} = favoriteSingle;

    // as target
    const [{ canDrop, isOver }, dropTargetRef] = useDrop<IFavorite, any, any>(() => ({
        accept: DndItemTypes.favoriteItem,
        drop: (item, monitor) => {
            //setColor(item.color)
            return ({result: "result"})
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
            console.log(item)
            console.log(monitor.getDropResult())
        },
    })

    const ref = useRef<HTMLDivElement>(null);
    dragSourceRef(dropTargetRef(ref));

    return (
        <div className={clsx({
            [style.sourceSingle]: true,

            [style.sourceSingle_canDrop]: canDrop,
            [style.sourceSingle_isOver]: isOver,
            [style.sourceSingle_isDragging]: isDragging,
        })}
             ref={ref}
        >
            <img src={src} alt=""/>
        </div>
    )
}