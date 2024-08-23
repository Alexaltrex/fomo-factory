import {v4 as uuidv4} from 'uuid';
import src0 from "../../assets/png/0.png";
import src1 from "../../assets/png/1.png";
import src2 from "../../assets/png/2.png";
import src3 from "../../assets/png/3.png";
import src4 from "../../assets/png/4.png";
import src5 from "../../assets/png/5.png";

export interface IFavorite {
    id: string
    src: string
}

export const favoriteSingles: IFavorite[] = [
    {
        id: uuidv4(),
        src: src0,
    },
    {
        id: uuidv4(),
        src: src1,
    },
    {
        id: uuidv4(),
        src: src2,
    },
    {
        id: uuidv4(),
        src: src3,
    },
]