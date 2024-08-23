import style from "./SearchForTokens.module.scss";
import {FormikHelpers, useFormik} from "formik";
import {svgIcons} from "../../../../assets/svgIcons";
import {useState} from "react";
import {clsx} from "clsx";
import {observer} from "mobx-react-lite";
import {useStore} from "../../../../store/rootStore";
import {ColorThemeEnum} from "../../../../store/appStore";

interface IValues {
    token: string
}

const initialValues: IValues = {
    token: "",
}


export const SearchForTokens = observer(() => {
    const {
        appStore: {
            colorTheme,
        }
    } = useStore();


    const onSubmit = async (values: IValues, formikHelpers: FormikHelpers<IValues>) => {
        try {
            const {token} = values
            if (token)
                console.log(token);

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

    const [focus, setFocus] = useState(false);


    return (
        <div className={clsx({
            [style.searchForTokens]: true,
            [style.searchForTokens_light]: colorTheme === ColorThemeEnum.light,
        })}>

            <form onSubmit={formik.handleSubmit}
                  className={style.form}
            >

                <div className={clsx({
                    [style.inputWrapper]: true,
                    [style.inputWrapper_focus]: focus,
                })}>
                    <input type="text"
                           placeholder="Search for Tokens..."
                           {...formik.getFieldProps('token')}
                           onFocus={() => setFocus(true)}
                           onBlur={(e) => {
                               setFocus(false);
                               formik.handleBlur(e);
                           }}
                    />
                </div>

                <button type="submit"
                        className={style.submitBtn}
                >
                    {svgIcons.search}
                </button>

            </form>
        </div>

    )
})