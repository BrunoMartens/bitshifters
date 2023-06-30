import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BlogsComponent } from './blogs/blogs.component';
import { BlogRoutingModule } from './blog-router.module';

@NgModule({
  declarations: [BlogsComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    BlogRoutingModule
  ],
})
export class BlogModule {}
