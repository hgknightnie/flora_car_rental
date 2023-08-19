import { Component, Input } from '@angular/core';
import { Iorder } from 'src/app/interfaces/iorder';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {
  @Input() order!: Iorder;
}
