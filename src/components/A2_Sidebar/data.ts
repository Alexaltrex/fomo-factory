import {v4 as uuidv4} from 'uuid';
import src0 from "../../assets/png/0.png";
import src1 from "../../assets/png/1.png";
import src2 from "../../assets/png/2.png";
import src3 from "../../assets/png/3.png";
import src4 from "../../assets/png/4.png";
import src5 from "../../assets/png/5.png";

export interface IFavorite {
    folderId: string | null
    id: string
    src: string
    name: string
}

export interface IFavoriteFolder {
    id: string
    folderName: string
    favorites: IFavorite[]
}

export const favoriteSingles: IFavorite[] = [
    {
        id: uuidv4(),
        src: src0,
        folderId: null,
        name: "Keanu Rekanu",
    },
    {
        id: uuidv4(),
        src: src1,
        folderId: null,
        name: "Billie Eilisht",
    },
    {
        id: uuidv4(),
        src: src2,
        folderId: null,
        name: "Keanu Rekanu",
    },
    {
        id: uuidv4(),
        src: src3,
        folderId: null,
        name: "Billie Eilisht",
    },
    {
        id: uuidv4(),
        src: src4,
        folderId: null,
        name: "Keanu Rekanu",
    },
    {
        id: uuidv4(),
        src: src5,
        folderId: null,
        name: "Billie Eilisht",
    },
    {
        id: uuidv4(),
        src: src0,
        folderId: null,
        name: "Keanu Rekanu",
    },
    {
        id: uuidv4(),
        src: src1,
        folderId: null,
        name: "Billie Eilisht",
    },
    {
        id: uuidv4(),
        src: src2,
        folderId: null,
        name: "Keanu Rekanu",
    },
    {
        id: uuidv4(),
        src: src3,
        folderId: null,
        name: "Billie Eilisht",
    },
    {
        id: uuidv4(),
        src: src4,
        folderId: null,
        name: "Keanu Rekanu",
    },
    {
        id: uuidv4(),
        src: src5,
        folderId: null,
        name: "Billie Eilisht",
    },
]

// source: single, folderItem
// target: single, folder

// 1. single to single
// 2. single to folder
// 3. folderItem to another folder
// 4. folderItem to single
// 5. folderItem out from folder