import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HorizonPage } from './horizon.page';

describe('HorizonPage', () => {
  let component: HorizonPage;
  let fixture: ComponentFixture<HorizonPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HorizonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
