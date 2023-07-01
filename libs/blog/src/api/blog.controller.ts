import { Controller, Get, Post, Body, Param } from '@nestjs/common';

import { BlogService } from './blog.service';
import { Blog } from '../domain/blog';

@Controller('blogs')
export class BlogController {
  constructor(private readonly blogService: BlogService) {}

  @Get()
  findAll() {
    return this.blogService.findAll();
  }

  @Post()
  async save(@Body() blog: Blog) {
    return await this.blogService.save(blog);
  }


  /*findById(id) {
    return this.entriesSrv.findById(entryId);
  }*/

}