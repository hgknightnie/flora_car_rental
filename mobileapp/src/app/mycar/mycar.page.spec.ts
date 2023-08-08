import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MycarPage } from './mycar.page';

describe('MycarPage', () => {
  let component: MycarPage;
  let fixture: ComponentFixture<MycarPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MycarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
