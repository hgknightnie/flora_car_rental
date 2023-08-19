import { Component } from '@angular/core';
import { Iorder } from 'src/app/interfaces/iorder';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {
  orders!: Iorder[];
  isDataAvailable: boolean = false;

  constructor(private orderService: OrderService) {
    orderService.getOrders().subscribe({
      next: (results) => {
        // console.log(results);
        this.orders = results;
        this.isDataAvailable = true;
      },
      error: (err) => {
        console.log(err);
      }
    });

  }
}
