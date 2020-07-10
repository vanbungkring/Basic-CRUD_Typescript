import mongoose from "mongoose";
import { Model } from "./model.interface";

export interface IBook{
    _id: any;
    title: string;
    author: string;
    year: number;
}

export type BookDocument = mongoose.Document & {
    _id: any;
    title: string;
    author: string;
    year: number;
}

export default MBook;