import { CarSubjectService } from './../../services/car-subject.service';
import { Component, Input, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Icar } from 'src/app/interfaces/icar';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss'],
})
export class CarComponent  implements OnInit {

  @Input() car!: Icar;

  constructor(private carSubjectService: CarSubjectService, private navCtrl: NavController) { }

  ngOnInit() {
  }

  // navigate to detail page
  viewDetail(carID: number) {
    this.carSubjectService.setCar(this.car);
    this.navCtrl.navigateForward(`/tabs/home/cardetail/${this.car.car_id}`);
  }

}
