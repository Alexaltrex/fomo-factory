import src0 from "../../assets/png/0.png";
import src1 from "../../assets/png/1.png";
import src2 from "../../assets/png/2.png";
import src3 from "../../assets/png/3.png";
import src4 from "../../assets/png/4.png";
import src5 from "../../assets/png/5.png";

export interface ISearchResultItem {
    image: string
    name: string
    twitter: string
    confirmed: boolean
    statistics: {
        star: number
        users: number
        comments: number
    },
    price: string
}

export const searchResult: ISearchResultItem[] = [
    {
        image: src0,
        name: "Keanu Rekanu",
        twitter: "#",
        confirmed: true,
        statistics: {
            star: 56,
            users: 76,
            comments: 42,
        },
        price: "0.064"
    },
    {
        image: src1,
        name: "Keanu Rekanu",
        twitter: "#",
        confirmed: true,
        statistics: {
            star: 56,
            users: 76,
            comments: 42,
        },
        price: "0.064"
    },
    {
        image: src2,
        name: "Keanu Rekanu",
        twitter: "#",
        confirmed: false,
        statistics: {
            star: 56,
            users: 76,
            comments: 42,
        },
        price: "0.064"
    },
    {
        image: src3,
        name: "Keanu Rekanu",
        twitter: "#",
        confirmed: true,
        statistics: {
            star: 56,
            users: 76,
            comments: 42,
        },
        price: "0.064"
    },
    {
        image: src4,
        name: "Keanu Rekanu",
        twitter: "#",
        confirmed: false,
        statistics: {
            star: 56,
            users: 76,
            comments: 42,
        },
        price: "0.064"
    },
    {
        image: src5,
        name: "Keanu Rekanu",
        twitter: "#",
        confirmed: true,
        statistics: {
            star: 56,
            users: 76,
            comments: 42,
        },
        price: "0.064"
    },
]