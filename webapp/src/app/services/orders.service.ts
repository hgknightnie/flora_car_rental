import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Iorder } from '../interfaces/iorder';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private http: HttpClient) { }

  getOrders() {
    return this.http.get<Iorder []>("http://localhost:3000/orders");
  }
}
