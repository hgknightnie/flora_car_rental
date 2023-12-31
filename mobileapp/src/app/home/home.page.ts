import { CarsService } from './../services/cars.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Icar } from '../interfaces/icar';
import { AlertController, AnimationController, IonModal, NavController, ToggleCustomEvent } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})

// Home Page
export class HomePage implements OnInit {

  @ViewChild(IonModal) modal!: IonModal;

  // store the filter result
  filter = {
    car_type: {
      is_check: false,
      sedan: false,
      truck: false,
      suv: false,
      van: false
    },
    fuel_type: {
      is_check: false,
      gasoline: false,
      electric: false,
      hybrid: false
    },
    price: {
      is_check: false,
      low_price: 0,
      high_price: 100
    }
  }
  // use for filter
  carTypeGroupDisabled = true;
  fuelTypeGroupDisabled = true;
  priceGroupDisabled = true;

  // Car List
  cars!: Icar[];

  // use to sort price
  priceDirection = 'desc';
  priceIconName = 'chevron-down-outline';

  constructor(private carService: CarsService, private alertController: AlertController, private navCtrl: NavController, private animationCtrl: AnimationController) {

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

  // filter the list by fieldName and queryClause
  // @param queryClause seperate by ',', use for sql 'in'
  filterList(fieldName: string, queryClause: string) {
    this.carService.getCarsByFilter(fieldName, queryClause).subscribe({
      next: (results) => {
        this.cars = results;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  // navigate to map page
  navToMap() {
    // this.router.navigate(['/gmap']);
    this.navCtrl.navigateForward('tabs/gmap');
    // this.navCtrl.navigateBack('/gmap');

  }

  confirm() {
    this.modal.dismiss(this.filter, 'confirm');
  }

  // close filter dialog
  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    let queryClause = '';
    if (ev.detail.role === 'confirm') {
      // console.log(ev.detail.data);

      if(this.filter.car_type.is_check) {
        if(this.filter.car_type.sedan) {
          queryClause += "sedan,"
        }
        if(this.filter.car_type.truck) {
          queryClause += "truck,"
        }
        if(this.filter.car_type.suv) {
          queryClause += "suv,"
        }
        if(this.filter.car_type.van) {
          queryClause += "van,"
        }
        if(queryClause !== '') {
          queryClause = queryClause.substring(0, queryClause.lastIndexOf(','));
        }
        this.filterList('car_type', queryClause);
      } else if(this.filter.fuel_type.is_check) {
        if(this.filter.fuel_type.gasoline) {
          queryClause += "gasoline,"
        }
        if(this.filter.fuel_type.electric) {
          queryClause += "electric,"
        }
        if(this.filter.fuel_type.hybrid) {
          queryClause += "hybrid,"
        }
        if(queryClause !== '') {
          queryClause = queryClause.substring(0, queryClause.lastIndexOf(','));
        }
        console.log(queryClause);
        this.filterList('fuel_type', queryClause);
      } else if(this.filter.price.is_check) {
        if(this.filter.price.low_price != null && this.filter.price.high_price !== null) {
          queryClause = `${this.filter.price.low_price}|${this.filter.price.high_price}`;
        }
        this.filterList('price', queryClause);
      }
      console.log(queryClause);
    }
  }

  // toggle change in filter dialog
  catTypeChanged(event: Event) {
    this.filter.fuel_type.is_check = false;
    this.fuelTypeGroupDisabled = true;
    this.filter.price.is_check = false;
    this.priceGroupDisabled = true;

    const ev = event as ToggleCustomEvent;
    if(ev.detail.checked) {
      this.carTypeGroupDisabled = false;
    } else {
      this.carTypeGroupDisabled = true;
    }
  }

  // toggle change in filter dialog
  fuelTypeChanged(event: Event) {
    this.filter.car_type.is_check = false;
    this.carTypeGroupDisabled = true;
    this.filter.price.is_check = false;
    this.priceGroupDisabled = true;

    const ev = event as ToggleCustomEvent;
    if(ev.detail.checked) {
      this.fuelTypeGroupDisabled = false;
    } else {
      this.fuelTypeGroupDisabled = true;
    }
  }

  // toggle change in filter dialog
  priceTypeChanged(event: Event) {
    this.filter.fuel_type.is_check = false;
    this.fuelTypeGroupDisabled = true;
    this.filter.car_type.is_check = false;
    this.carTypeGroupDisabled = true;

    const ev = event as ToggleCustomEvent;
    if(ev.detail.checked) {
      this.priceGroupDisabled = false;
    } else {
      this.priceGroupDisabled = true;
    }
  }

  // filter page animation enter
  enterAnimation = (baseEl: HTMLElement) => {
    const root = baseEl.shadowRoot!;

    const backdropAnimation = this.animationCtrl
      .create()
      .addElement(root.querySelector('ion-backdrop')!)
      .fromTo('opacity', '0.01', 'var(--backdrop-opacity)');

    const wrapperAnimation = this.animationCtrl
      .create()
      .addElement(root.querySelector('.modal-wrapper')!)
      .keyframes([
        { offset: 0, opacity: '0', transform: 'scale(0)' },
        { offset: 1, opacity: '0.99', transform: 'scale(1)' },
      ]);

    return this.animationCtrl
      .create()
      .addElement(baseEl)
      .easing('ease-out')
      .duration(350)
      .addAnimation([backdropAnimation, wrapperAnimation]);
  };

  // filter page animation leave
  leaveAnimation = (baseEl: HTMLElement) => {
    return this.enterAnimation(baseEl).direction('reverse');
  };
}
