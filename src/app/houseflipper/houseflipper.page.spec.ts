import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HouseflipperPage } from './houseflipper.page';

describe('HouseflipperPage', () => {
  let component: HouseflipperPage;
  let fixture: ComponentFixture<HouseflipperPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseflipperPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
