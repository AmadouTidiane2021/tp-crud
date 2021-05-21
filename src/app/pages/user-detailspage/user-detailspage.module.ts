import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserDetailspagePageRoutingModule } from './user-detailspage-routing.module';

import { UserDetailspagePage } from './user-detailspage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserDetailspagePageRoutingModule
  ],
  declarations: [UserDetailspagePage]
})
export class UserDetailspagePageModule {}
