import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarComponent } from './components/car/car.component';
import { VendorComponent } from './components/vendor/vendor.component';
import { OrdersComponent } from './components/orders/orders.component';

const routes: Routes = [
  {path: 'car', component: CarComponent},
  {path: 'vendor', component: VendorComponent},
  {path: 'orders', component: OrdersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
