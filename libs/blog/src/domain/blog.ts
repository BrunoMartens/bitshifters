import { Types } from 'mongoose';
export type Blog = {
    _id?: Types.ObjectId;
    title: string;
    content: string;
}