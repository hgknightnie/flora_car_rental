import { Component, Input, OnInit } from '@angular/core';
import { Icar } from 'src/app/interfaces/icar';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss'],
})
export class CarComponent  implements OnInit {

  @Input() car!: Icar;

  constructor() { }

  ngOnInit() {
  }

}
