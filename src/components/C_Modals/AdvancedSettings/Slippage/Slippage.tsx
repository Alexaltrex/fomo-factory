import style from "./Slippage.module.scss";
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

export const Slippage = () => {
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
        <div className={style.slippage}>
            <div className={style.header}>
                <p>
                    SLIPPAGE
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
                            Slippage is the difference in the amount of tokens you receive from a trade compared to what you
                            expected, caused by rapid price changes in the market
                        </p>

                        <form className={style.form}
                             onSubmit={formik.handleSubmit}
                        >
                            <div className={style.fieldWrapper}>
                                <input type="number"
                                       placeholder="Enter the percentage"
                                       {...formik.getFieldProps('value')}
                                />
                            </div>
                            <IconButton icon={svgIcons.union}
                                        type="submit"
                                        className={style.submitBtn}
                            />
                        </form>
                    </>
                )
            }


        </div>
    )
}