import src0 from "../../../assets/png/0.png";
import src1 from "../../../assets/png/1.png";
import src2 from "../../../assets/png/2.png";
import src3 from "../../../assets/png/3.png";
import src4 from "../../../assets/png/4.png";
import src5 from "../../../assets/png/5.png";
import holder from "../../../assets/png/holder.png";

export interface IUnconfirmedToken {
    id: number
    src: string
    name: string
    twitter: string
    followers: {
        x: string
        instagram: string
        tiktok: string
    },
    pledgeAmount: string[],
    statistics: {
        star: number
        users: number
        comments: number
    },
    holders: {
        id: number
        src: string
        name: string
        type: string
        pledgeAmount: string[],
        time: string[],
        transaction: string
    }[]
}

const unconfirmedTokenCommonData = {
    followers: {
        x: "2.4m",
        instagram: "2.4m",
        tiktok: "2.4m",
    },
    pledgeAmount: ["0.653", "$3.5"],
    statistics: {
        star: 56,
        users: 76,
        comments: 42,
    },
    holders: [
        {
            id: 0,
            src: holder,
            name: "Keanu Rekanu",
            type: "pledged",
            pledgeAmount: ["0.653", "$3.5"],
            time: ["12", "Days"],
            transaction: "1ABC7154748D1CE5144478CDEB574AE244B939B5"
        },
        {
            id: 1,
            src: holder,
            name: "Keanu Rekanu",
            type: "Unpledged",
            pledgeAmount: ["0.653", "$3.5"],
            time: ["12", "Days"],
            transaction: "1ABC7154748D1CE5144478CDEB574AE244B939B5"
        },
        {
            id: 2,
            src: holder,
            name: "Keanu Rekanu",
            type: "pledged",
            pledgeAmount: ["0.653", "$3.5"],
            time: ["12", "Days"],
            transaction: "1ABC7154748D1CE5144478CDEB574AE244B939B5"
        },
        {
            id: 3,
            src: holder,
            name: "Keanu Rekanu",
            type: "pledged",
            pledgeAmount: ["0.653", "$3.5"],
            time: ["12", "Days"],
            transaction: "1ABC7154748D1CE5144478CDEB574AE244B939B5"
        },
    ]
}

export const unconfirmedTokens: IUnconfirmedToken[] = [
    {
        id: 0,
        src: src0,
        name: "Keanu Rekanu 0",
        twitter: "#",
        ...unconfirmedTokenCommonData
    },
    {
        id: 1,
        src: src1,
        name: "Keanu Rekanu 1",
        twitter: "#",
        ...unconfirmedTokenCommonData
    },
    {
        id: 2,
        src: src2,
        name: "Keanu Rekanu 2",
        twitter: "#",
        ...unconfirmedTokenCommonData
    },
    {
        id: 3,
        src: src3,
        name: "Keanu Rekanu 3",
        twitter: "#",
        ...unconfirmedTokenCommonData
    },
    {
        id: 4,
        src: src4,
        name: "Keanu Rekanu 4",
        twitter: "#",
        ...unconfirmedTokenCommonData
    },
    {
        id: 5,
        src: src5,
        name: "Keanu Rekanu 5",
        twitter: "#",
        ...unconfirmedTokenCommonData
    },
]

