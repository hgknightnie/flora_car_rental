import { Component, OnInit } from '@angular/core';
import { Icar } from '../interfaces/icar';
import { ActivatedRoute } from '@angular/router';
import { CarsService } from '../services/cars.service';

@Component({
  selector: 'app-mycar',
  templateUrl: './mycar.page.html',
  styleUrls: ['./mycar.page.scss'],
})
export class MycarPage implements OnInit {

  car: Icar = {
    car_id: 0,
    location: '',
    available_time: new Date('2021-02-21 9:00:00'),
    price: 0,
    car_type: '',
    fuel_type: '',
    vendor: {
      vendor_id: 0,
      vendor_name: '',
      phone: '',
      email: '',
      location: '',
      description: ''
    },
    make: '',
    model: '',
    mileage: 0,
    status: '',
    candition: '',
    car_images: [{
      image_id: 0,
      car_id: 0,
      image_name: '',
      path: '',
    }],
    ordertimes: 0,
    lat: 0,
    lng: 0
  };

  // obj = {
  //   name: 'a',
  //   value: 'b'
  // }

  obj = {};

  constructor(private carsService: CarsService) {

    this.carsService.getCar(1).subscribe({
      next: (result) => {
        this.car = result;
        console.log(this.car);
      }
    });

  }

  ngOnInit() {
  }

}
