import {usePreview} from "react-dnd-multi-backend";
import {IFavorite} from "../../A2_Sidebar/data";
import styles from "./PreviewCustom.module.scss";
import React from "react";

export const PreviewCustom = () => {
    const preview = usePreview()

    if (!preview.display) {
        return null
    }
    const {itemType, item, style} = preview;

    const {name, src} = item as IFavorite

    return (
        <div className={styles.previewCustom}
             style={{
                 position: "relative",
                 zIndex: 9999999,
                 ...style
             }}
        >
            <img src={src} alt=""/>
            <p>
                {name}
            </p>
        </div>
    )
}