import { CarsService } from './../services/cars.service';
import { Component, OnInit } from '@angular/core';
import { Icar } from '../interfaces/icar';
import { AlertController, NavController } from '@ionic/angular';
import { Ifilter } from '../interfaces/ifilter';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  cars!: Icar[];

  priceDirection = 'desc';
  priceIconName = 'chevron-down-outline';

  // public alertButtons = [
  //   {
  //     text: 'Cancel',
  //     cssClass: 'alert-button-cancel',
  //   },
  //   {
  //     text: 'OK',
  //     cssClass: 'alert-button-confirm',
  //   },
  // ];

  // public alertInputs = [
  //   {
  //     name: 'typeName',
  //     label: 'Sedan',
  //     type: 'checkbox',
  //     value: 'sedan',
  //   },
  //   {
  //     name: 'typeName',
  //     label: 'Truck',
  //     type: 'checkbox',
  //     value: 'truck',
  //   },
  //   {
  //     name: 'typeName',
  //     label: 'SUV',
  //     type: 'checkbox',
  //     value: 'suv',
  //   },
  //   {
  //     name: 'typeName',
  //     label: 'Van',
  //     type: 'checkbox',
  //     value: 'van',
  //   }
  // ];

  constructor(private carService: CarsService, private alertController: AlertController, private navCtrl: NavController) {

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
    if (field == 'price') {
      if (this.priceDirection === 'desc') {
        this.priceDirection = 'asc';
        this.priceIconName = 'chevron-up-outline';
      } else {
        this.priceDirection = 'desc';
        this.priceIconName = 'chevron-down-outline';
      }
      direction = this.priceDirection;
    }

    this.carService.getCarsByOrder(field, direction).subscribe({
      next: (results) => {
        this.cars = results;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  async showAlert() {
    const alert = await this.alertController.create({
      header: 'Please select car type',
      inputs: [
        {
          name: 'typeName',
          label: 'Sedan',
          type: 'radio',
          value: 'sedan',
        },
        {
          name: 'typeName',
          label: 'Truck',
          type: 'radio',
          value: 'truck',
        },
        {
          name: 'typeName',
          label: 'SUV',
          type: 'radio',
          value: 'suv',
        },
        {
          name: 'typeName',
          label: 'Van',
          type: 'radio',
          value: 'van',
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'alert-button-cancel',
          handler: () => {
            console.log('Confirm Cancel');
          }
        },
        {
          text: 'Show Result',
          cssClass: 'alert-button-confirm',
          handler: (alertData) => {
            if(alertData) {
              console.log(alertData);
              this.filterList('car_type', alertData);
            }
            
          }
        }
      ]
    });

    await alert.present();

    // const result = await alert.onDidDismiss();

    // console.log(result);

    
  }

  filterList(fileName: string, value: string) {
    this.carService.getCarsByFilter(fileName, value).subscribe({
      next: (results) => {
        this.cars = results;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  navToMap() {
    // this.router.navigate(['/gmap']);
    this.navCtrl.navigateForward('tabs/gmap');
    // this.navCtrl.navigateBack('/gmap');

  }
}
