import { DatePipe } from '@angular/common';
import { Iorder } from './../../interfaces/iorder';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
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

  // TODO change to real login user
  customer: Icustomer = {
    customer_id: 1,
    customer_name: 'John Wick',
    phone: '(403)777-7777',
    email: 'johnwick@gmail.com'
  }
  strNow = new Date().toISOString().slice(0, 16);

  constructor(
    private fb: FormBuilder, 
    private route: ActivatedRoute, 
    private carsService: CarsService, 
    private alertController: AlertController,
    private datePipe : DatePipe) {
    this.orderForm = fb.group({
      customer_id: ['', [Validators.required]],
      car_id: ['', [Validators.required]],
      pickup_location: ['', [Validators.required]],
      pickup_date: ['', [Validators.required]],
      dropoff_date: ['', [Validators.required]],
      dropoff_location: ['', [Validators.required]],
      mileage_limit: ['', [Validators.required]],
      total_price: ['', [Validators.required]],
      order_date: ['', [Validators.required]]
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
          order_id: 0,
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

    // this.orderForm.get('mileage_limit')!.disable();

  }

  ngOnInit() {

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

  // submit the order
  onSubmit() {
    this.orderForm.get('order_date')!.setValue(this.getCurrentTimeString());
    this.carsService.createOrder(this.orderForm.value).subscribe({
      next: (result) => {
        this.showAlert('Success', 'Order was created successfully');
        this.orderForm.reset();
      },
      error: (err) => {
        console.log(err);
        this.showAlert('Error', 'Something went wrong');
      }
    });
  }

  // show success dialog
  async showAlert(title: string, message: string) {
    const alert = await this.alertController.create({
      header: title,
      message: message,
      buttons: ['OK'],
    });

    await alert.present();
  }

  getCurrentTimeString() {
    // let now = new Date()
    // let month = `${now.getMonth() < 10 ? '0' + now.getMonth() : now.getMonth()}`;
    // let nowstr = `${now.getFullYear()}-${month}-${now.getDate()} ${now.getHours()}:${now.getMinutes()}`;
    // console.log('1', nowstr);
    // console.log('2', now.toISOString());
    // console.log('3', now.toLocaleString());
    // console.log('4', now.toString());
    // console.log('5', Date.now());

    return this.datePipe.transform(new Date(), 'yyyy-MM-dd HH:mm');
  }

}
