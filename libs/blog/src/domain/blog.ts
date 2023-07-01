import { Types } from 'mongoose';
export type Blog = {
    _id?: Types.ObjectId;
    title: string;
    titleKebab?: string;
    description: string;
    tags: string;
    year: number;
    month: number;
    content: string;
    createdOn?: Date;
    modifiedOn?: Date;
}