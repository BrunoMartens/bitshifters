import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { BlogsComponent } from './blogs/blogs.component';

const routes: Routes =[ 
    {
        path: '',
        component: BlogsComponent
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [ RouterModule]
})
export class BlogRoutingModule {}