import { CarsService } from './../../services/cars.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Icar } from 'src/app/interfaces/icar';
import { CarSubjectService } from 'src/app/services/car-subject.service';

@Component({
  selector: 'app-cardetail',
  templateUrl: './cardetail.page.html',
  styleUrls: ['./cardetail.page.scss'],
})

/*
  show car detail information
*/
export class CardetailPage implements OnInit {

  car!: Icar;

  carId!: string | null;

  constructor(private carSubjectService: CarSubjectService, private navCtrl: NavController) {
    // get car information using RxJS
    this.carSubjectService.carObs$.subscribe((value) => {
      this.car = value;
    });
  }

  ngOnInit() {
  }

  // navigate to order page
  orderCar(carID: number) {
    this.carSubjectService.setCar(this.car);
    this.navCtrl.navigateForward(`/tabs/home/carorder/${carID}`);
  }

}
