import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GmapPage } from './gmap.page';

describe('GmapPage', () => {
  let component: GmapPage;
  let fixture: ComponentFixture<GmapPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GmapPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
