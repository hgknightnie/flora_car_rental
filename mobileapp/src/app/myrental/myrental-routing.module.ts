import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyrentalPage } from './myrental.page';

const routes: Routes = [
  {
    path: '',
    component: MyrentalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyrentalPageRoutingModule {}
