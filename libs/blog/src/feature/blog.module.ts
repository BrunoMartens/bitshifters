/* eslint-disable @nx/enforce-module-boundaries */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BlogsComponent } from './blogs/blogs.component';
import { BlogRoutingModule } from './blog-router.module';
import { EditBlogComponent } from './edit-blog/edit-blog.component';
import { AddBlogComponent } from './add-blog/add-blog.component';
import { BlogFormComponent } from '../ui/blog-form/blog-form.component';
import { SharedModule } from '@bitshifters/shared';
import { BlogComponent } from './blog/blog.component';

@NgModule({
  declarations: [
    BlogsComponent,
    EditBlogComponent,
    AddBlogComponent,
    BlogFormComponent,
    BlogComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    BlogRoutingModule,
    SharedModule
  ],
})
export class BlogModule {}
