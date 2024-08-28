import {observer} from "mobx-react-lite";
import {useStore} from "../../../store/rootStore";
import style from "./RenameFolder.module.scss"
import {useRef} from "react";
import {useOutsideClick} from "../../../hooks/useOutsideClick";
import {svgIcons} from "../../../assets/svgIcons";
import {IconButton} from "../../_common/IconButton/IconButton";
import {FormikHelpers, useFormik} from "formik";
import {ButtonCustom, VariantEnum} from "../../_common/ButtonCustom/ButtonCustom";
import {FormikErrors} from "formik/dist/types";

interface IValues {
    value: string
}

export const RenameFolder = observer(() => {
    const {
        appStore: {
            renameFolderModal, setRenameFolderModal,
            folderToEdit, renameFolder
        }
    } = useStore();

    const initialValues: IValues = {
        value: folderToEdit?.folderName || "",
    }

    const ref = useRef<HTMLDivElement>(null!);
    const onClose = () => {
        setRenameFolderModal(false)
        formik.resetForm();
    };
    useOutsideClick(ref, onClose);

    const onSubmit = async (values: IValues, formikHelpers: FormikHelpers<IValues>) => {
        try {
            const {value} = values;
            console.log(value)
            if (value && folderToEdit) {
                renameFolder({folderId: folderToEdit.id, folderName: value});
                onClose();
            }
        } catch (e: any) {
            console.log(e.message)
        } finally {
            formikHelpers.resetForm();
        }
    }

    const validate = (values: IValues): FormikErrors<IValues> => {
        const errors = {} as FormikErrors<IValues>
        if (!values.value) {
            errors.value = "Required"
        }
        return errors
    }

    const formik = useFormik({
        initialValues,
        onSubmit,
        validate,
        enableReinitialize: true
    })

    return (
        <>
            {
                renameFolderModal && (
                    <div className={style.renameFolder}>
                        <div className={style.card}
                             ref={ref}
                        >
                            <div className={style.cardHeader}>
                                <div className={style.cardHeaderLeft}>
                                    {svgIcons.cog}
                                    <span>rename folder</span>
                                </div>
                                <IconButton icon={svgIcons.close}
                                            className={style.closeBtn}
                                            onClick={onClose}
                                />
                            </div>

                            <div className={style.description}>
                                You can change the name of the folder
                            </div>

                            <form onSubmit={formik.handleSubmit}
                                  className={style.form}
                            >
                                <div className={style.inputWrapper}>
                                    <input type="text"
                                           placeholder="Enter folder name"
                                           {...formik.getFieldProps('value')}
                                    />
                                    {formik.errors.value && formik.touched.value && (
                                        <p className={style.error}>
                                            {formik.errors.value}
                                        </p>
                                    )}
                                </div>


                                <div className={style.buttons}>
                                    <ButtonCustom label="cancel"
                                                  onClick={(e) => {
                                                      e.preventDefault();
                                                      onClose();
                                                  }}
                                    />
                                    <ButtonCustom label="rename"
                                                  variant={VariantEnum.contained}
                                                  type="submit"
                                    />
                                </div>

                            </form>

                        </div>
                    </div>
                )
            }
        </>

    )
})