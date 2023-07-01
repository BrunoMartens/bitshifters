import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { BlogsComponent } from './blogs/blogs.component';
import { EditBlogComponent } from './edit-blog/edit-blog.component';
import { AddBlogComponent } from './add-blog/add-blog.component';
import { BlogComponent } from './blog/blog.component';

const routes: Routes =[ 
    {
        path: '',
        component: BlogsComponent
    },
    {
        path: ':year/:month/:title',
        component: BlogComponent
    },
    {
        path: ':year/:month/:title/edit',
        component: EditBlogComponent
    },
    {
        path: 'new',
        component: AddBlogComponent
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [ RouterModule]
})
export class BlogRoutingModule {}