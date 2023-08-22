import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Icar } from '../interfaces/icar';

@Injectable({
  providedIn: 'root'
})

// RxJS
export class CarSubjectService {
  private car$ = new BehaviorSubject<any>({});
  carObs$ = this.car$.asObservable();

  constructor() { }

  setCar(car: Icar) {
    this.car$.next(car);
  }
}
