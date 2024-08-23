import src from "../../../assets/png/holder.png"
import src2 from "../../../assets/png/holder2.png"
export interface ITrade {
    src: string
    name: string
    type: string
    pledgeAmount: number[],
    time: string[],
    transaction: string
}

export const trades: ITrade[] = [
    {
        src,
        name: "Keanu Rekanu",
        type: "Pledged",
        pledgeAmount: [0.653, 3.5],
        time: ["12", "days"],
        transaction: "1234561234567894c50"
    },
    {
        src,
        name: "Keanu Rekanu",
        type: "Unpledged",
        pledgeAmount: [0.653, 3.5],
        time: ["12", "days"],
        transaction: "1234561234567894c50"
    },
    {
        src,
        name: "Keanu Rekanu",
        type: "Pledged",
        pledgeAmount: [0.653, 3.5],
        time: ["12", "days"],
        transaction: "1234561234567894c50"
    },
    {
        src,
        name: "Keanu Rekanu",
        type: "Unpledged",
        pledgeAmount: [0.653, 3.5],
        time: ["12", "days"],
        transaction: "1234561234567894c50"
    },
    {
        src,
        name: "Keanu Rekanu",
        type: "Pledged",
        pledgeAmount: [0.653, 3.5],
        time: ["12", "days"],
        transaction: "1234561234567894c50"
    },
    {
        src,
        name: "Keanu Rekanu",
        type: "Unpledged",
        pledgeAmount: [0.653, 3.5],
        time: ["12", "days"],
        transaction: "1234561234567894c50"
    },
    {
        src,
        name: "Keanu Rekanu",
        type: "Pledged",
        pledgeAmount: [0.653, 3.5],
        time: ["12", "days"],
        transaction: "1234561234567894c50"
    },
]

export const tradesUnconfirmed: ITrade[] = [
    {
        src: src2,
        name: "Rekanu Keanu",
        type: "Pledged",
        pledgeAmount: [0.653, 3.5],
        time: ["12", "days"],
        transaction: "1234561234567894c50"
    },
    {
        src: src2,
        name: "Rekanu Keanu",
        type: "Unpledged",
        pledgeAmount: [0.653, 3.5],
        time: ["12", "days"],
        transaction: "1234561234567894c50"
    },
    {
        src: src2,
        name: "Rekanu Keanu",
        type: "Pledged",
        pledgeAmount: [0.653, 3.5],
        time: ["12", "days"],
        transaction: "1234561234567894c50"
    },
    {
        src: src2,
        name: "Rekanu Keanu",
        type: "Unpledged",
        pledgeAmount: [0.653, 3.5],
        time: ["12", "days"],
        transaction: "1234561234567894c50"
    },
    {
        src: src2,
        name: "Rekanu Keanu",
        type: "Pledged",
        pledgeAmount: [0.653, 3.5],
        time: ["12", "days"],
        transaction: "1234561234567894c50"
    },
    {
        src: src2,
        name: "Rekanu Keanu",
        type: "Unpledged",
        pledgeAmount: [0.653, 3.5],
        time: ["12", "days"],
        transaction: "1234561234567894c50"
    },
    {
        src: src2,
        name: "Rekanu Keanu",
        type: "Pledged",
        pledgeAmount: [0.653, 3.5],
        time: ["12", "days"],
        transaction: "1234561234567894c50"
    },
]

export interface IHolder {
    address: string
    tokens: string[]
    balance: string[]
}

export const holders = [
    {
        address: "Jb8qwertyj5O",
        tokens: [
            "990,31$BEC",
            "09,15%"
        ],
        balance: [
            "5,14K",
            "$3.5",
        ]
    },
    {
        address: "Jb8qwertyj5O",
        tokens: [
            "990,31$BEC",
            "09,15%"
        ],
        balance: [
            "5,14K",
            "$3.5",
        ]
    },
    {
        address: "Jb8qwertyj5O",
        tokens: [
            "990,31$BEC",
            "09,15%"
        ],
        balance: [
            "5,14K",
            "$3.5",
        ]
    },
    {
        address: "Jb8qwertyj5O",
        tokens: [
            "990,31$BEC",
            "09,15%"
        ],
        balance: [
            "5,14K",
            "$3.5",
        ]
    },

]