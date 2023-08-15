import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarComponent } from '../home/car/car.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [
    CarComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    CarComponent
  ]
})
export class SharedModule { }
