import { Controller, Get, Post, Body, Param } from '@nestjs/common';

import { BlogService } from './blog.service';

@Controller('blogs')
export class BlogController {
  constructor(private readonly blogService: BlogService) {}

  @Get()
  findAll() {
    return this.blogService.findAll();
  }

  /*@Get(':entryId')
  findById(@Param('entryId') entryId) {
    return this.entriesSrv.findById(entryId);
  }

  @Post()
  create(@Body() entry) {
    return this.entriesSrv.create(entry);
  }*/
}