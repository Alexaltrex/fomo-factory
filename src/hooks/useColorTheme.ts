import {useLocation, useSearchParams} from "react-router-dom";
import {useEffect} from "react";
import {ColorThemeEnum} from "../store/appStore";
import {serializeSearchParams} from "../helpers/serializeSearchParams";

export const useColorTheme = (colorTheme: ColorThemeEnum, setColorTheme: (lang: ColorThemeEnum) => void) => {
    let [searchParams, setSearchParams] = useSearchParams();
    const location = useLocation();

    // URL => STATE
    useEffect(() => {
        const colorTheme = searchParams.get('color');
        if (colorTheme) {
            setColorTheme(colorTheme as ColorThemeEnum)
        }
    }, []);

    // STATE => URL
    useEffect(() => {
        const nextSearchParams = {...serializeSearchParams(searchParams)};
        nextSearchParams.color = colorTheme;
        setSearchParams(nextSearchParams);
    }, [colorTheme, location.pathname]);
}