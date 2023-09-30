import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iorder } from '../interfaces/iorder';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  // get all orders
  getOrders() {
    return this.http.get<Iorder []>("http://localhost:3000/orders");
  }

  // delete a order
  deleteOrder(orderId: number) {
    return this.http.delete<Iorder>(`http://localhost:3000/orders/${orderId}`);
  }
}
