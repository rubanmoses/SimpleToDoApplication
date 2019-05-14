import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { ListEditComponent } from './list-edit/list-edit.component';

const routes: Routes = [
    { path : 'toDo' , component: ToDoListComponent },
    { path: 'edit/:id', component: ListEditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
