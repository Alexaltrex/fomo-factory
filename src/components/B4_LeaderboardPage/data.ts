import src from "../../assets/png/points.png";

export interface IPoint {
    src: string
    value: string
    pts: string
}

const point: IPoint = {
    src,
    value: "Z7Xy9Qp4MvB2Lk6H",
    pts: '100,00',
}

export const points: IPoint[] = Array
    .from(({length: 50}), (v, k) => k)
    .map(k => point)

export interface IReferal {
    src: string
    value: string
    sol: number
}

const referal: IReferal = {
    src,
    value: "Z7Xy9Qp4MvB2Lk6H",
    sol: 20000,
}

export const referals: IReferal[] = Array
    .from(({length: 50}), (v, k) => k)
    .map(k => referal)