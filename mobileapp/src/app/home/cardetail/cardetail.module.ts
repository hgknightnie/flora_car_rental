import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CardetailPageRoutingModule } from './cardetail-routing.module';

import { CardetailPage } from './cardetail.page';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CardetailPageRoutingModule
  ],
  declarations: [CardetailPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CardetailPageModule {}
