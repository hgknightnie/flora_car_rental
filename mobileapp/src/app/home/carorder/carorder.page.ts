import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Icar } from 'src/app/interfaces/icar';
import { CarsService } from 'src/app/services/cars.service';

@Component({
  selector: 'app-carorder',
  templateUrl: './carorder.page.html',
  styleUrls: ['./carorder.page.scss'],
})
export class CarorderPage implements OnInit {
  carId: number = 0;
  car!: Icar;
  carForm: FormGroup;
  isDataAvailable: boolean = false;

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private carsService: CarsService) {
    this.carForm = fb.group({
      make: ['', [Validators.required]],
      price: ['', [Validators.required]],
      car_type: ['', [Validators.required]],
      fuel_type: ['', [Validators.required]]
    });

    // Get car_id from url
    let id = route.snapshot.paramMap.get('car_id');
    if(id !== null) {
      this.carId = parseInt(id);
    }

  }

  ngOnInit() {
    this.carsService.getCar(this.carId).subscribe({
      next: (result) => {
        console.log(result);
        this.car = result;
        this.carForm.patchValue(result);
        this.isDataAvailable = true;
      }
    });
  }

  onSubmit() {

  }

}
