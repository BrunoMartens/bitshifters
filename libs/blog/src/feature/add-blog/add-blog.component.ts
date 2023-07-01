import { Component, ViewChild } from '@angular/core';
import { BlogFormComponent } from '../../ui/blog-form/blog-form.component';
import { BlogService } from '../blog.service';
import { Router } from '@angular/router';

@Component({
  selector: 'bitshifters-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.scss'],
})
export class AddBlogComponent {
  @ViewChild('blog')
  blogForm!: BlogFormComponent;

  constructor(private blogService: BlogService, private router: Router) {}

  saveBlog() {
    this.blogService.saveBlog(this.blogForm.getValues()).subscribe(blog => {
      this.router.navigate(['blogs', blog.year, blog.month, blog.titleKebab, 'edit']);
    });
  }
}
