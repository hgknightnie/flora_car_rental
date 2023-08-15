import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GmapPageRoutingModule } from './gmap-routing.module';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { GmapPage } from './gmap.page';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GmapPageRoutingModule,
    SharedModule
  ],
  declarations: [GmapPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GmapPageModule {}
