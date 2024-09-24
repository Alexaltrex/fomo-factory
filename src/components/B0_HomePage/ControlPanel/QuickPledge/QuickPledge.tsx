import style from "./QuickPledge.module.scss";
import {observer} from "mobx-react-lite";
import {useStore} from "../../../../store/rootStore";
import {clsx} from "clsx";
import {ColorThemeEnum} from "../../../../store/appStore";
import {useState} from "react";
import {svgIcons} from "../../../../assets/svgIcons";
import {FormikHelpers, useFormik} from "formik";

interface IValues {
    value: number
}

const initialValues: IValues = {
    value: 0.653
}

export const QuickPledge = observer(() => {
    const {
        appStore: {
            colorTheme,
            confirmed,
        }
    } = useStore()

    const [switched, setSwitched] = useState(false)

    const onSubmit = async (values: IValues, formikHelpers: FormikHelpers<IValues>) => {
        try {
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


    return (
        <div className={clsx({
            [style.quickPledge]: true,
            [style.quickPledge_light]: colorTheme === ColorThemeEnum.light,
        })}>

            <button className={clsx({
                [style.btn]: true,
                [style.btn_switched]: switched,
            })}
                    onClick={() => setSwitched(!switched)}
            >
                <div className={style.switcher}/>
                <p>
                    {confirmed ? "Quick buy" : "Quick Pledge"}
                </p>
            </button>

            <form className={style.form}
                  onSubmit={formik.handleSubmit}
            >
                {svgIcons.solana}
                <input type="number"
                       placeholder="enter value"
                       {...formik.getFieldProps("value")}
                />
            </form>

        </div>
    )
})