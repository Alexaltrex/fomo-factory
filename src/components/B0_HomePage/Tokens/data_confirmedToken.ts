import src0 from "../../../assets/png/0.png";
import src1 from "../../../assets/png/1.png";
import src2 from "../../../assets/png/2.png";
import src3 from "../../../assets/png/3.png";
import src4 from "../../../assets/png/4.png";
import src5 from "../../../assets/png/5.png";

export interface IConfirmedToken {
    src: string
    name: string
    twitter: string
    created: string
    followers: {
        x: string
        instagram: string
        tiktok: string
    },
    marketcap: string[],
    currentPrice: string[],
    statistics: {
        star: number
        users: number
        comments: number
    },
}

const confirmedTokenCommonData = {
    twitter: "#",
    created: "1 d",
    followers: {
        x: "2.4m",
        instagram: "2.4m",
        tiktok: "2.4m",
    },
    marketcap: ["0.653", "$3.5"],
    currentPrice: ["0.653", "$3.5"],
    statistics: {
        star: 56,
        users: 76,
        comments: 42,
    },
}

export const confirmedTokens: IConfirmedToken[] = [
    {
        src: src0,
        name: "Keanu Rekanu 0",
        ...confirmedTokenCommonData
    },
    {
        src: src1,
        name: "Keanu Rekanu 1",
        ...confirmedTokenCommonData
    },
    {
        src: src2,
        name: "Keanu Rekanu 2",
        ...confirmedTokenCommonData
    },
    {
        src: src3,
        name: "Keanu Rekanu 3",
        ...confirmedTokenCommonData
    },
    {
        src: src4,
        name: "Keanu Rekanu 4",
        ...confirmedTokenCommonData
    },
    {
        src: src5,
        name: "Keanu Rekanu 5",
        ...confirmedTokenCommonData
    },
]