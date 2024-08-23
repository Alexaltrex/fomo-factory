import style from "./GetTweet.module.scss"
import {FC, useRef, useState} from "react";
import {useOutsideClick} from "../../../hooks/useOutsideClick";
import {svgIcons} from "../../../assets/svgIcons";
import {IconButton} from "../../_common/IconButton/IconButton";
import {ButtonCustom, VariantEnum} from "../../_common/ButtonCustom/ButtonCustom";
import {clsx} from "clsx";
import {FormikHelpers, useFormik} from "formik";

interface IGetTweet {
    showModal: boolean
    onClose: () => void
}

export const GetTweet: FC<IGetTweet> = ({
                                            showModal,
                                            onClose,
                                        }) => {
    const ref = useRef<HTMLDivElement>(null!);
    useOutsideClick(ref, () => onCloseHandler());

    const [step, setStep] = useState(1);

    const title = [
        "Connect your account",
        "Subscribe to an account",
        "Make a post",
        "Thank you for your participation"
    ]

    const leftButtonLabel = [
        "Go back",
        "Go back to step 1",
        "Go back to step 2",
    ]

    const rightButtonLabel = [
        "Log in",
        "I’ve subscribed",
        "I’ve posted",
        "Close"
    ]

    const onCloseHandler = () => {
        setStep(1);
        onClose();
    }

    const onLeftClick = () => {
        if (step === 1) {
            onCloseHandler();
        } else {
            setStep(step - 1)
        }
    }

    const onRightClick = () => {
        if (step === 4) {
            onCloseHandler();
        } else {
            setStep(step + 1)
        }
    }

    const description = [
        <>
            Connect your Twitter account and enter your profile below
        </>,
        <>
            You've connected your Twitter, great! Now follow <span>@Fomo Fectory</span> on Twitter
        </>,
        <>
            Almost done! Now make a post on Twitter about the token
        </>,
        <>
            Thank you very much for taking part in our contest! On August 12, we will draw tickets and announce the list
            of winners
        </>,
    ]

    return (
        <>
            {
                showModal && (
                    <div className={style.getTweet}>
                        <div className={style.card}
                             ref={ref}
                        >

                            <div className={style.header}>
                                <div className={style.cardHeaderLeft}>
                                    {step !== 4 ? svgIcons.checkList : svgIcons.check}
                                    <p>
                                        <span>{title[step - 1]}</span>
                                        {
                                            step !== 4 && (
                                                <>
                                                    <span>{` (Step ${step}`}</span>
                                                    <span className={style.grey}> of 3</span>
                                                    <span>)</span>
                                                </>
                                            )
                                        }

                                    </p>
                                </div>
                                <IconButton icon={svgIcons.close}
                                            className={style.closeBtn}
                                            onClick={onCloseHandler}
                                />
                            </div>

                            <div className={style.body}>

                                <p className={style.description}>
                                    {description[step - 1]}
                                </p>

                                {
                                    step === 1 && (
                                        <Form icon={svgIcons.x_outlined}
                                              placeholder="Enter your profile"
                                        />
                                    )
                                }

                                {
                                    step === 3 && (
                                        <Form icon={svgIcons.link}
                                              placeholder="Link to your post"
                                        />
                                    )
                                }


                            </div>

                            <div className={clsx({
                                [style.footer]: true,
                                [style.footer_step4]: step === 4,
                            })}>
                                {
                                    step !== 4 && (
                                        <ButtonCustom label={leftButtonLabel[step - 1]}
                                                      className={style.leftBtn}
                                                      onClick={onLeftClick}

                                        />
                                    )
                                }
                                <ButtonCustom label={rightButtonLabel[step - 1]}
                                              className={style.rightBtn}
                                              variant={VariantEnum.contained}
                                              onClick={onRightClick}

                                />
                            </div>


                        </div>
                    </div>
                )
            }
        </>
    )
}

//========= FORM =========//
interface IValues {
    value: string
}

interface IForm {
    icon: JSX.Element
    placeholder: string
}

const Form: FC<IForm> = ({
                             icon,
                             placeholder
                         }) => {
    const initialValues: IValues = {
        value: "",
    }

    const onSubmit = async (values: IValues, formikHelpers: FormikHelpers<IValues>) => {
        try {
            const {value} = values;
            if (value) {
                console.log(value);
            }
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

    return (
        <form onSubmit={formik.handleSubmit}
              className={style.form}
        >
            <div className={style.icon}>
                {icon}
            </div>
            <input type="text"
                   placeholder={placeholder}
                   {...formik.getFieldProps('value')}
            />
        </form>
    )
}
