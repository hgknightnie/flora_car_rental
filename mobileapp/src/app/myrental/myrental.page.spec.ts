import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyrentalPage } from './myrental.page';

describe('MyrentalPage', () => {
  let component: MyrentalPage;
  let fixture: ComponentFixture<MyrentalPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MyrentalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
