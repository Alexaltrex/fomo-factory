import {observer} from "mobx-react-lite";
import {useStore} from "../../../store/rootStore";
import style from "./DeleteFolder.module.scss"
import {useRef} from "react";
import {useOutsideClick} from "../../../hooks/useOutsideClick";
import {svgIcons} from "../../../assets/svgIcons";
import {IconButton} from "../../_common/IconButton/IconButton";
import {ButtonCustom, VariantEnum} from "../../_common/ButtonCustom/ButtonCustom";

export const DeleteFolder = observer(() => {
    const {
        appStore: {
            deleteFolderModal, setDeleteFolderModal,
            folderToEdit, deleteFolder,
        }
    } = useStore();

    const ref = useRef<HTMLDivElement>(null!);
    const onClose = () => {
        setDeleteFolderModal(false)
    };
    useOutsideClick(ref, onClose);

    return (
        <>
            {
                deleteFolderModal && (
                    <div className={style.deleteFolder}>
                        <div className={style.card}
                             ref={ref}
                        >
                            <div className={style.cardHeader}>
                                <div className={style.cardHeaderLeft}>
                                    {svgIcons.trashAlt}
                                    <span>delete folder</span>
                                </div>
                                <IconButton icon={svgIcons.close}
                                            className={style.closeBtn}
                                            onClick={onClose}
                                />
                            </div>

                            <div className={style.description}>
                                Are you sure you want to delete this <span>{folderToEdit?.folderName}</span> folder? The action cannot be undone
                            </div>

                            <div className={style.buttons}>
                                <ButtonCustom label="cancel"
                                              onClick={onClose}
                                />
                                <ButtonCustom label="delete"
                                              variant={VariantEnum.contained}
                                              onClick={() => {
                                                 if (folderToEdit) {
                                                     deleteFolder(folderToEdit.id)
                                                 }
                                                 onClose();
                                              }}
                                />
                            </div>

                        </div>
                    </div>
                )
            }
        </>

    )
})