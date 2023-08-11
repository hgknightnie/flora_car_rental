import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardetailPage } from './cardetail.page';

describe('CardetailPage', () => {
  let component: CardetailPage;
  let fixture: ComponentFixture<CardetailPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CardetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
