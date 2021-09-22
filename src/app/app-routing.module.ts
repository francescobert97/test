import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersCardComponent } from './users-card/users-card.component';
import { UsersListComponent } from './users-list/users-list.component';

const routes: Routes = [
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
