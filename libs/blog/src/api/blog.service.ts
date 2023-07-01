import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, Types } from "mongoose";
import { Blog } from "../domain/blog";

@Injectable()
export class BlogService {
    constructor(
        @InjectModel('Blog') private readonly blogModel: Model<Blog>
    ) {}

    findAll() {
        return this.blogModel.find().exec();
    }

    async save(blog: Blog): Promise<Blog> {
        if(blog._id) {
            return await this.updateBlog(blog);
        } else {
            return await this.createBlog(blog);
        }
    }

    async createBlog(blog: Blog): Promise<Blog> {
        const date = new Date();
        blog._id = new Types.ObjectId();
        blog.titleKebab = this.getKebabTitle(blog.title);
        blog.createdOn = date;
        blog.modifiedOn = date;
        const blogModel = new this.blogModel(blog);
        return await blogModel.save();
    }

    async updateBlog(blog: Blog): Promise<Blog> {
        const date = new Date();
        blog.titleKebab = this.getKebabTitle(blog.title);
        blog.modifiedOn = date;
        const blogModel = new this.blogModel(blog);
        return await blogModel.save();
    }

    getKebabTitle(input: string): string {
        const regex = /\s+/g;
        return input.replace(regex, '-').toLowerCase();
    }
}
