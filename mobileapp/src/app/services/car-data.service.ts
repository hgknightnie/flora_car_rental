import { Injectable } from '@angular/core';
import { CityLocation } from '../interfaces/location';

@Injectable({
  providedIn: 'root'
})
export class CarDataService {

  private calgaryLocation: CityLocation = {
    city: 'Calgary',
    lat: 51.03938287793352,
    lng: -114.0620640034704,
    description: `Calgary is a city in the Canadian province of Alberta. It is the largest city in Alberta and the largest metro area within the three Prairie Provinces region.`,
    car_locations: [
      {
        name: 'Toyota',
        lat: 51.03744988510994, 
        lng: -114.15247505283581,
        description: `toyota corolla - the toyota corolla is a trusted and economical compact sedan, known for its reliability and fuel efficiency. it offers practicality and a comfortable ride, making it a popular choice for daily commuting and family transportation.`,
        make: "toyota"
      },
      {
        name: 'BMW',
        lat: 51.11701507270868, 
        lng: -114.07607244116315,
        description: `bmw 3 series - the bmw 3 series is a luxurious and sporty sedan that sets the standard for driving dynamics in its class. it combines elegant design, advanced technology, and responsive engines to provide a refined yet engaging driving journey.`,
        make: 'bmw'
      },
      {
        name: 'Tesla',
        lat: 50.99988174597113, 
        lng: -113.98569493147947,
        description: `tesla model s - the tesla model s is a groundbreaking electric luxury sedan, known for its impressive range and instant acceleration. pioneering autonomous features and a minimalist interior make the model s a symbol of future-oriented automotive innovation.`,
        make: 'tesla'
      },
      {
        name: 'Mercedes-Benz',
        lat: 50.94075163798933, 
        lng: -114.0931783591917,
        description: `mercedes-benz e-class - the mercedes-benz e-class is an executive car that exudes elegance and sophistication. with its plush interior, cutting-edge technology, and comfortable ride, the e-class offers a first-class travel experience.`,
        make: 'benz'
      }
    ]
  };

  constructor() { }

  getCarData() {
    return this.calgaryLocation;
  }
}
