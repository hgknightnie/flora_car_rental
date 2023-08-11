import { CarsService } from './../services/cars.service';
import { Component, OnInit } from '@angular/core';
import { Icar } from '../interfaces/icar';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  cars!: Icar[];

  priceDirection = 'desc';
  priceIconName = 'chevron-down-outline';

  constructor(private carService: CarsService) {

    // get car list
    carService.getCars().subscribe({
      next: (results) => {
        this.cars = results;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  ngOnInit() {
  }

  // sort list by field and direction
  sortList(field: string, direction: string) {
    console.log(field, direction);
    if(field == 'price') {
      if(this.priceDirection === 'desc') {
        this.priceDirection = 'asc';
        this.priceIconName = 'chevron-up-outline';
      } else {
        this.priceDirection = 'desc';
        this.priceIconName = 'chevron-down-outline';
      }
      direction = this.priceDirection;
    }

    this.carService.getSortedCars(field, direction).subscribe({
      next: (results) => {
        this.cars = results;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  filterList() {
    console.log("show filter");
  }
}
