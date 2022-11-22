import data from './data.json' assert {type: 'json'};
// export type ModelType = typeof data
export interface Model {
    No: string;
    Kode_Kartu: string;
    Kuota: string;
    Masa_Aktif: string;
    Harga: string;
    Klasifikasi: string;
}[];
export type ModelType = Model[];
export default data;