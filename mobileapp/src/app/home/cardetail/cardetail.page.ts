import { CarsService } from './../../services/cars.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Icar } from 'src/app/interfaces/icar';

@Component({
  selector: 'app-cardetail',
  templateUrl: './cardetail.page.html',
  styleUrls: ['./cardetail.page.scss'],
})
export class CardetailPage implements OnInit {

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

  carId!: string | null;

  constructor(private route: ActivatedRoute, private carsService: CarsService) {
    // Get car_id from url
    this.carId = route.snapshot.paramMap.get('car_id');

    if (this.carId !== null) {
      this.carsService.getCar(parseInt(this.carId)).subscribe({
        next: (result) => {
          this.car = result;
          // console.log(this.car);
        }
      });
    }
  }

  ngOnInit() {
  }

}
