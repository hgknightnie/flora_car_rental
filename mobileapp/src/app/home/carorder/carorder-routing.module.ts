import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarorderPage } from './carorder.page';

const routes: Routes = [
  {
    path: '',
    component: CarorderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarorderPageRoutingModule {}
