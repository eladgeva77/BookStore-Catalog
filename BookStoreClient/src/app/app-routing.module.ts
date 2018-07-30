import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddBookFormComponent } from './add-book-form/add-book-form.component';
import { BookTableComponent } from './book-table/book-table.component';
import { BookDescriptionComponent } from './book-description/book-description.component';

const routes: Routes = [
  {
    path : 'add',
    component : AddBookFormComponent
  },
  {
    path : 'home',
    component : BookTableComponent
  },
  {
    path : '',
    redirectTo: "/home",
    pathMatch: 'full'
  },
  {
    path : ':isbn',
    component : BookDescriptionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
