import style from "./EditProfileModal.module.scss";
import {ChangeEvent, FC, useEffect, useRef, useState} from "react";
import {useOutsideClick} from "../../../../hooks/useOutsideClick";
import {svgIcons} from "../../../../assets/svgIcons";
import {IconButton} from "../../../_common/IconButton/IconButton";
import {FormikHelpers, useFormik} from "formik";
import {ButtonCustom, VariantEnum} from "../../../_common/ButtonCustom/ButtonCustom";

interface IEditProfileModal {
    open: boolean
    onClose: () => void
}

interface IValues {
    instagram: string
    tiktok: string
}

const initialValues: IValues = {
    instagram: "https://instagram.com/hrld4332",
    tiktok: "",
}


export const EditProfileModal: FC<IEditProfileModal> = ({
                                                            open,
                                                            onClose,
                                                        }) => {

    const ref = useRef<HTMLDivElement>(null!);
    const inputRef = useRef<HTMLInputElement>(null!)
    useOutsideClick(ref, onClose);

    const [file, setFile] = useState<File | null>(null);
    const [src, setSrc] = useState<null | string>(null)

    const onSelectImage = () => {
        inputRef.current.click()
    }

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target && e.target.files && e.target.files[0]) {
            setFile(e.target.files[0])
        }
    }

    useEffect(() => {
        if (file) {
            console.log(file)
            setSrc(URL.createObjectURL(file))
        }
        return () => {
            src && URL.revokeObjectURL(src)
        }
    }, [file])

    const onSubmit = async (values: IValues, formikHelpers: FormikHelpers<IValues>) => {
        try {

            const {instagram, tiktok} = values;
            console.log(values);
        } catch (e: any) {
            console.log(e.message)
        } finally {
            formikHelpers.resetForm();
        }
    }

    const formik = useFormik({
        initialValues,
        onSubmit,
    })

    const onCancel = (e: any) => {
        e.preventDefault();
        onClose();
    }

    const onSave = () => {

    }

    return (
        <>
            {
                open && (
                    <div className={style.editProfileModal}>
                        <div className={style.card}
                             ref={ref}
                        >

                            <div className={style.cardHeader}>
                                <div className={style.cardHeaderLeft}>
                                    {svgIcons.pen}
                                    <span>EDIT PROFILE</span>
                                </div>
                                <IconButton icon={svgIcons.close}
                                            className={style.closeBtn}
                                            onClick={onClose}
                                />
                            </div>

                            <div className={style.avatarSection}>
                                <div className={style.imgWrapper}>
                                    {svgIcons.user}
                                    {src && <img src={src} alt=""/>}
                                </div>

                                <input type="file"
                                       accept="image/png, image/jpeg"
                                       ref={inputRef}
                                       onChange={onChange}
                                />


                                <div className={style.right}>

                                    <p className={style.label}>Avatar</p>

                                    {
                                        file && (
                                            <div className={style.info}>
                                                <p>{file.name}</p>
                                                <p>{(file.size / (1024 * 1024)).toFixed(2)} Mb</p>
                                            </div>
                                        )

                                    }

                                    <button onClick={onSelectImage}>
                                        <span>Select image</span>
                                    </button>
                                </div>
                            </div>

                            <div className={style.checkSection}>
                                <p>HELLOWORLD324</p>

                                <div>{svgIcons.check}</div>
                            </div>

                            <form onSubmit={formik.handleSubmit}
                                  className={style.form}
                            >
                                {
                                    [
                                        {
                                            icon: svgIcons.instagram,
                                            placeholder: "ENTER LINK",
                                            name: "instagram",
                                        },
                                        {
                                            icon: svgIcons.tiktok,
                                            placeholder: "ENTER LINK",
                                            name: "tiktok",
                                        },
                                    ].map(({icon, placeholder, name}, key) => (
                                        <div key={key}
                                             className={style.field}
                                        >
                                            <div className={style.icon}>
                                                {icon}
                                            </div>
                                            <input type="text"
                                                   placeholder={placeholder}
                                                   {...formik.getFieldProps(name)}
                                            />
                                        </div>
                                    ))
                                }

                                <div className={style.btns}>
                                    <ButtonCustom label="CANCEL"
                                                  onClick={onCancel}
                                    />
                                    <ButtonCustom label="SAVE"
                                                  variant={VariantEnum.contained}
                                                  onClick={onSave}
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
}