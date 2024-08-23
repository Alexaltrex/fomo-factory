import style from "./PriorityFee.module.scss";
import {IconButton} from "../../../_common/IconButton/IconButton";
import {svgIcons} from "../../../../assets/svgIcons";
import {clsx} from "clsx";
import {useState} from "react";
import {FormikHelpers, useFormik} from "formik";

interface IValues {
    value: string
}

const initialValues: IValues = {
    value: "",
}

export const PriorityFee = () => {
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
        <div className={style.priorityFee}>

            <div className={style.header}>
                <p>
                    PRIORITY FEE
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
                            A priority fee is an optional extra payment you can include with your transaction to incentivize
                            miners to process it faster. The higher the fee, the greater the likelihood that your
                            transaction will be confirmed quickly
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