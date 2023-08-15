import { Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { GoogleMap } from '@capacitor/google-maps';
import { environment } from 'src/environments/environment';
import { ICityLocation, ICarLocation } from '../interfaces/ilocation';
import { IMarkerEl } from '../interfaces/imarker';
import { Icar } from '../interfaces/icar';
import { CarsService } from '../services/cars.service';


@Component({
  selector: 'app-gmap',
  templateUrl: './gmap.page.html',
  styleUrls: ['./gmap.page.scss'],
})
export class GmapPage implements OnDestroy  {

  // the template reference variable for the DOM element in the component view where the Google Map will be rendered
  @ViewChild('map') public mapEl!: ElementRef<HTMLElement>;

  // the generated Google Map instance in the class
  public map!: GoogleMap;

  // stores the Google Map Markers that have been generated
  private markers: Array<IMarkerEl> = [];

  // stores the generated Google Map Marker Ids - which will be used for subsequent clearing of markers when switching between locations
  private ids: Array<string> = [];

  private calgaryLocation!: ICityLocation;

  cars!: Icar[];
  selectedCar! : Icar;

  constructor(private carService: CarsService) {

    this.calgaryLocation = {
      city: 'Calgary',
      lat: 51.03938287793352,
      lng: -114.0620640034704,
      description: `Select a car from map`,
      cars: []
    };

    // get car list
    carService.getCars().subscribe({
      next: (results) => {
        this.cars = results;
        this.calgaryLocation.cars = this.cars;
      },
      error: (err) => {
        console.log(err);
      }
    });

    
  }

  /**
   * @description   Ionic lifecycle hook event fired as the component view is being entered.
   *                Here we create and render the map - as the DOM has now loaded :)
   */
  ionViewDidEnter() {
    setTimeout(async () => {
      await this.createMap();
    }, 500);
  }

  /**
   * @param {*} event
   * @description     Fired off when the value in the <ion-select> country menu has changed.
   *                  Here we retrieve the selected country from the locations array, generate
   *                  the necessary map markers and declare the values for the title/summary of
   *                  the selected country
   */
  public initLocate() {
    this.location(this.calgaryLocation);
    
    // Render to component view
    // this.heading = this.calgaryLocation.city;
    // this.description = this.calgaryLocation.description;
  }

  // initialise the Google Map and provide the necessary configurations/parameters
  // id (assigns a unique id to the Google Map instance and is related to the id property of the capacitor-google-map element in the component view)
  // element (references the capacitor-google-map element in the component view)
  // apiKey (assigns our Google Map API key value to initialise/generate the map)
  // config (declares the initial map location and zoom value for display)
  private async createMap(): Promise<void> {
    this.map = await GoogleMap.create({
      id: 'google-map',
      element: this.mapEl.nativeElement,
      apiKey: environment.keys.googleMaps,
      forceCreate: true,
      config: {
        center: {
          lat: 51.03938287793352,
          lng: -114.0620640034704
        },
        zoom: 10
      }
    });
    this.initLocate();
  }

  // Receives the supplied location, changes the map to display this location
  // and renders the associated markers for that location
  private async location(selectedLocation: ICityLocation): Promise<void> {
    await this.manageMap(selectedLocation);
    await this.manageMarkers(selectedLocation);
  }

  // move the displayed map location to the designated coordinates
  private async manageMap(location: ICityLocation): Promise<void> {
    await this.map.setCamera({
      coordinate: {
        lat: location.lat,
        lng: location.lng,
      },
      zoom: 10
    });
  }

  // generate the map markers for each detected location
  // take the generated markers ids and adding those to each markers array entry 
  // (for enabling the generated markers to be identified for subsequent removal when we change locations) 
  // set up a listener event to the marker being clicked (and subsequently handles the retrieved data)
  private async manageMarkers(location: ICityLocation): Promise<void> {
    this.markers = this.generateMarkers(location.cars);
    this.ids = await this.map.addMarkers(this.markers);
    this.markers.map((marker, index) => {
      marker.markerId = this.ids[index];
    });
    await this.map.setOnMarkerClickListener((event) => {
      this.manageMarker(event);
    });
  }

  // when selected by the user to display the associated data for that location
  private manageMarker(event: any): void {
    const summary = this.markers.filter((item: any) => {
      if (item.markerId === event.markerId) {
        return item;
      }
    });

    // Render to component view
    // this.heading = summary[0].title;
    // this.description = summary[0].car.condition;
    this.selectedCar = summary[0].car;
  }

  // Generates the individual map markers from the supplied locations
  private generateMarkers(cars: Array<Icar>): Array<any> {
    return cars.map((car: any, index: number) => ({
      coordinate: {
        lat: car.lat,
        lng: car.lng
      },
      title: `${car.make} - ${car.model}`,
      snippet: `[mileage:${car.mileage} km] [car type:${car.car_type}] [fule type:${car.fuel_type}]`,
      iconUrl: `/assets/icon/cars/${car.make}.svg`,
      iconSize: {
        width: 32,
        height: 32
      },
      car: car
    }));
  }

  /**
   * @method ngOnDestroy
   * @description   Angular lifecycle event fired after component view has been destroyed.
   *                Here we clear out the map and all associated listeners
   */
  ngOnDestroy(): void {
    this.map.removeAllMapListeners();
    this.map.destroy();
    // this.map = undefined;
  }

}