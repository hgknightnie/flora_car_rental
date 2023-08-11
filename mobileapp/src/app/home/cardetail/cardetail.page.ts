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

  car!: Icar;

  constructor(private route: ActivatedRoute, private carsService: CarsService) {
    // Get task id from url
    let carId = route.snapshot.paramMap.get('car_id');

    if (carId !== null) {
      // Get task from DB and pre-populate from with the data
      carsService.getCar(parseInt(carId)).subscribe({
        next: (result) => {
          this.car = result;
          console.log(this.car);
        }
      });
    }
  }

  ngOnInit() {
  }

}
