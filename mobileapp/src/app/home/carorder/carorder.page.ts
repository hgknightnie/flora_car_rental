import { Iorder } from './../../interfaces/iorder';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Icar } from 'src/app/interfaces/icar';
import { Icustomer } from 'src/app/interfaces/icustomer';
import { CarsService } from 'src/app/services/cars.service';

@Component({
  selector: 'app-carorder',
  templateUrl: './carorder.page.html',
  styleUrls: ['./carorder.page.scss'],
})
export class CarorderPage implements OnInit {
  carId: number = 0;
  car!: Icar;
  orderForm!: FormGroup;
  isDataAvailable: boolean = false;
  order!: Iorder
  customer: Icustomer = {
    customer_id: 1,
    customer_name: 'John Wick',
    phone: '(403)777-7777',
    email: 'johnwick@gmail.com'
  }
  strNow = new Date().toISOString().substring(0, new Date().toISOString().lastIndexOf(':'));

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private carsService: CarsService) {
    this.orderForm = fb.group({
      customer_id: ['', [Validators.required]],
      car_id: ['', [Validators.required]],
      pickup_location: ['', [Validators.required]],
      pickup_date: ['', [Validators.required]],
      dropoff_date: ['', [Validators.required]],
      dropoff_location: ['', [Validators.required]],
      mileage_limit: ['500', [Validators.required]],
      total_price: ['', [Validators.required]],
    });

    // Get car_id from url
    let id = route.snapshot.paramMap.get('car_id');
    if (id !== null) {
      this.carId = parseInt(id);
    }

    this.carsService.getCar(this.carId).subscribe({
      next: (result) => {
        // console.log(result);
        this.car = result;

        this.order = {
          order_id: null,
          customer_id: this.customer.customer_id,
          car_id: this.car.car_id,
          pickup_location: this.car.location,
          pickup_date: new Date(),
          dropoff_date: new Date(),
          dropoff_location: this.car.location,
          mileage_limit: 500,
          total_price: 0,
          order_date: new Date()
        }
        this.orderForm.patchValue(this.order);

        this.isDataAvailable = true;
      }
    });

    this.orderForm.get('mileage_limit')!.disable();

  }

  ngOnInit() {

  }

  onSubmit() {

  }

  get pickup_date() {
    return this.orderForm.get('pickup_date')!;
  }

  get dropoff_date() {
    return this.orderForm.get('dropoff_date')!;
  }

  get total_price() {
    return this.orderForm.get('total_price')!;
  }

  // calculate the total price as per date changing
  dateChange(event: Event) {
    // const ev = event as CustomEvent;
    // console.log(ev.detail.value);

    let pickupDate = new Date(this.orderForm.get('pickup_date')!.value);
    let dropoffDate = new Date(this.orderForm.get('dropoff_date')!.value);
    let pickupTime = pickupDate.getTime();
    let dropoffTime = dropoffDate.getTime();
    let diff = dropoffTime - pickupTime;
    if (diff > 0) {
      let diffDays = Math.ceil(diff / (1000 * 60 * 60 * 24));
      let price = this.car.price;
      let totalPrice = price * diffDays;
      let mileageLimit = 500 * diffDays;
      this.orderForm.get('total_price')!.setValue(totalPrice);
      this.orderForm.get('mileage_limit')!.setValue(mileageLimit);
    }
  }

}
