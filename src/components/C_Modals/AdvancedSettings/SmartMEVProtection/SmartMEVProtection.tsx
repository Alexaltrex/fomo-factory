import style from "./SmartMEVProtection.module.scss"
import {useState} from "react";
import {IconButton} from "../../../_common/IconButton/IconButton";
import {svgIcons} from "../../../../assets/svgIcons";
import {clsx} from "clsx";
import {FormikHelpers, useFormik} from "formik";

interface IValues {
    value: string
}

const initialValues: IValues = {
    value: "",
}


export const SmartMEVProtection = () => {
    const [open, setOpen] = useState(false);

    const onSubmit = (values: IValues, formikHelpers: FormikHelpers<IValues>) => {
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
        onSubmit: onSubmit,
    })

    return (
        <div className={style.smartMEVProtection}>

            <div className={style.header}>
                <p>
                    Smart-MEV Protection
                </p>
                <IconButton icon={svgIcons.right}
                            onClick={() => setOpen(!open)}
                            className={clsx({
                                [style.openBtn]: true,
                                [style.openBtn_open]: open,
                            })}
                />
            </div>

            {
                open && (
                    <>
                        <p className={style.description}>
                            By setting a bribery amount on top of your priority fee, you can encourage Jito validators to
                            prioritize your transaction for faster processing
                        </p>

                        <form className={style.form}
                              onSubmit={formik.handleSubmit}
                        >
                            <div className={style.fieldWrapper}>
                                <input type="number"
                                       placeholder="Enter the amount"
                                       {...formik.getFieldProps('value')}
                                />
                            </div>

                            <button type="submit"
                                    className={style.submitBtn}
                            >
                                {svgIcons.solana}<span>SOL</span>
                            </button>
                        </form>
                    </>
                )
            }

        </div>
    )
}