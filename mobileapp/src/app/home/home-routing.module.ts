import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage
  },
  {
    path: 'cardetail/:car_id',
    loadChildren: () => import('./cardetail/cardetail.module').then( m => m.CardetailPageModule)
  },
  {
    path: 'carorder/:car_id',
    loadChildren: () => import('./carorder/carorder.module').then( m => m.CarorderPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
