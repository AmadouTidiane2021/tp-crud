import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserDetailspagePage } from './user-detailspage.page';

const routes: Routes = [
  {
    path: '',
    component: UserDetailspagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserDetailspagePageRoutingModule {}
