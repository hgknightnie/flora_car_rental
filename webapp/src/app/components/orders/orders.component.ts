import { Component, numberAttribute } from '@angular/core';
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
  
  deleteOrder(orderId: number) {
    if(confirm(`Are you sure to delete this order (id: ${orderId})?`)) {
      this.orderService.deleteOrder(orderId).subscribe({
        next: (results) => {
          const orderIndex = this.orders.findIndex((obj) => obj.order_id === orderId);
          this.orders.splice(orderIndex, 1);
        },
        error: (err) => {
          console.log(err);
        }
      });
    }    
  }
}
