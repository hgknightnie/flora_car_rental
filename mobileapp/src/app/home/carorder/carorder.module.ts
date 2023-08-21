import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarorderPageRoutingModule } from './carorder-routing.module';

import { CarorderPage } from './carorder.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CarorderPageRoutingModule,
    SharedModule
  ],
  providers: [DatePipe],
  declarations: [CarorderPage]
})
export class CarorderPageModule {}
