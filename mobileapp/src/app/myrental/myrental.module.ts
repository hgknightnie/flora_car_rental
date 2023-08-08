import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyrentalPageRoutingModule } from './myrental-routing.module';

import { MyrentalPage } from './myrental.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyrentalPageRoutingModule
  ],
  declarations: [MyrentalPage]
})
export class MyrentalPageModule {}
