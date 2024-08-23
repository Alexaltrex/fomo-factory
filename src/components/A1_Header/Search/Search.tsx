import style from "./Search.module.scss"
import {observer} from "mobx-react-lite";
import {useStore} from "../../../store/rootStore";
import {clsx} from "clsx";
import {ColorThemeEnum} from "../../../store/appStore";
import {FormikHelpers, useFormik} from "formik";
import {svgIcons} from "../../../assets/svgIcons";
import {IconButton} from "../../_common/IconButton/IconButton";
import {useLocation, useNavigate} from "react-router-dom";

// домашняя страница
// мобильная версия: кнопка - при нажатии: 1. перенаправляет на страницу поиска, 2. заменяется на десктопную версию
// десктопная версия: форма - при активации: 1. перенаправляет на страницу поиска

// страница поиска
// на мобайле и десктопе - десктопная версия: форма - при активации: формирует содеримое страницы

interface IValues {
    value: string
}

const initialValues: IValues = {
    value: "",
}

export const Search = observer(() => {
    const {
        appStore: {
            colorTheme
        }
    } = useStore();

    const {pathname} = useLocation();
    const navigate = useNavigate()

    const onSubmit = async (values: IValues, formikHelpers: FormikHelpers<IValues>) => {
        try {
            const {value} = values;
            if (pathname !== "/search") {
                navigate("/search");
            }

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
              className={clsx({
                  [style.search]: true,
                  [style.search_light]: colorTheme === ColorThemeEnum.light,
              })}>
            <input type="text"
                   placeholder="Search"
                   {...formik.getFieldProps('value')}
            />

            <IconButton icon={svgIcons.search}
                        type="submit"
                        className={style.btn}/>

        </form>
    )
})