import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CarorderPage } from './carorder.page';

describe('CarorderPage', () => {
  let component: CarorderPage;
  let fixture: ComponentFixture<CarorderPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CarorderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
