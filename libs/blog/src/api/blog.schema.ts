import * as mongoose from 'mongoose';
import { Blog } from '../domain/blog'

export const BlogSchema = new mongoose.Schema<Blog>({
  title: String,
  titleKebab: String,
  description: String,
  tags: String,
  year: Number,
  month: Number,
  content: String,
  createdOn: Date,
  modifiedOn: Date
});