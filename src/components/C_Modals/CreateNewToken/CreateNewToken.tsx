import style from "./CreateNewToken.module.scss";
import {FC, useRef, useState} from "react";
import {useOutsideClick} from "../../../hooks/useOutsideClick";
import {svgIcons} from "../../../assets/svgIcons";
import {IconButton} from "../../_common/IconButton/IconButton";
import {FormikHelpers, useFormik} from "formik";
import {ButtonCustom, VariantEnum} from "../../_common/ButtonCustom/ButtonCustom";
import {Link, useNavigate} from "react-router-dom";

interface ICreateNewToken {
    showModal: boolean
    onClose: () => void
}

interface IValues {
    twitter: string
    instagram: string
    tiktok: string
}

const initialValues: IValues = {
    twitter: "",
    instagram: "",
    tiktok: "",
}

export const CreateNewToken: FC<ICreateNewToken> = ({
                                                        showModal,
                                                        onClose,
                                                    }) => {
    const onCloseHandler = () => {
        onClose();
        setAdded(false);
    }


    const ref = useRef<HTMLDivElement>(null!);
    useOutsideClick(ref, () => onCloseHandler());

    const onSubmit = async (values: IValues, formikHelpers: FormikHelpers<IValues>) => {
        try {

            const {twitter, instagram, tiktok} = values;
            console.log(values);
            setAdded(true);
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

    const [added, setAdded] = useState(false)

    const navigate = useNavigate()

    const onGoTo = () => {
        navigate("/editor");
        onCloseHandler();
    }

    return (
        <>
            {
                showModal && (
                    <div className={style.createNewToken}>
                        <div className={style.card}
                             ref={ref}
                        >

                            <div className={style.cardHeader}>
                                <div className={style.cardHeaderLeft}>
                                    {added ? svgIcons.arrowAltCircleUp : svgIcons.link}
                                    <span>
                                        {added ? "Your invitation was successfully sent" : "Add celebrity LINKS"}
                                    </span>
                                </div>
                                <IconButton icon={svgIcons.close}
                                            className={style.closeBtn}
                                            onClick={onCloseHandler}
                                />
                            </div>

                            {
                                !added && (
                                    <>
                                        <p className={style.description}>
                                            Earn money easily! Add link to celebrity’s twitter create a unique token, and
                                            get 1% of
                                            the sale of each token
                                        </p>

                                        <form onSubmit={formik.handleSubmit}
                                              className={style.form}
                                        >
                                            <div className={style.error}>
                                                <div className={style.icon}>
                                                    {svgIcons.exclamationTriangle}
                                                </div>
                                                <p>
                                                    Sorry, this account is already taken, please try adding another one
                                                </p>
                                            </div>


                                            {
                                                [
                                                    {
                                                        icon: svgIcons.x_outlined,
                                                        placeholder: "Add a link to celebrity’s Twitter",
                                                        name: "twitter"
                                                    },
                                                    {
                                                        icon: svgIcons.instagram,
                                                        placeholder: "Add a link to celebrity’s Instagram",
                                                        name: "instagram"
                                                    },
                                                    {
                                                        icon: svgIcons.tiktok,
                                                        placeholder: "Add a link to celebrity’s TikTok",
                                                        name: "tiktok"
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


                                            <ButtonCustom label="I'm a celebrity and I want to connect my Twitter"
                                                          className={style.btn1}
                                                          onClick={(e) => {
                                                              e.preventDefault();
                                                          }}
                                            />
                                            <ButtonCustom label="Add links"
                                                          variant={VariantEnum.contained}
                                                          className={style.btn2}
                                                          type="submit"
                                            />

                                        </form>
                                    </>
                                )
                            }


                            <p className={style.description}>
                                {
                                    added ? (
                                        <>
                                            We have sent your invitation to <span>https://x.com/billieeilish</span> to create a unique
                                            token. As soon as the celebrity confirms the creation of the token, we will
                                            notify you immediately. You can view the status of all the tokens you have
                                            created on the <Link to="/editor" className={style.link}>Editor’s panel</Link>
                                        </>
                                    ) : (
                                        <>
                                            By clicking “Add links”, you agree to our <span>Terms and Conditions</span>. If
                                            you have
                                            any
                                            questions,
                                            you can <span>Ask for help</span>
                                        </>
                                    )
                                }
                            </p>

                            {
                                added && (
                                    <ButtonCustom label="Go to the Editor’s panel"
                                                  variant={VariantEnum.contained}
                                                  className={style.goToBtn}
                                                  onClick={onGoTo}
                                    />
                                )
                            }


                        </div>
                    </div>
                )
            }
        </>


    )
}