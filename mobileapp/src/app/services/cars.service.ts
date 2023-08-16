import { Injectable, Directive } from '@angular/core';
import { Icar } from '../interfaces/icar';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  constructor(private http: HttpClient) { }

  getCars() {
    return this.http.get<Icar []>("http://localhost:3000/cars");
  }

  getCar(carId: number) {
    return this.http.get<Icar>(`http://localhost:3000/cars/${carId}`);
  }

  getCarsByOrder(order: string, direction: string) {
    return this.http.get<Icar []>(`http://localhost:3000/cars?order=${order}&direction=${direction}`);
  }

  getCarsByFilter(fieldName: string, values: string) {
    return this.http.get<Icar []>(`http://localhost:3000/cars?${fieldName}=${values}`);
  }

  getOrder(orderId: number) {
    return this.http.get<Icar []>(`http://localhost:3000/orders?${orderId}`);
  }
}
