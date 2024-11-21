import { DataResource } from "../services/DataResource";

export interface PicaModelis {
    pavadinimas: string
    aprasymas: string
    priedai: string[]
    kaina: number
}

export const Pica = new DataResource<PicaModelis>('http://localhost:3000/picos');

