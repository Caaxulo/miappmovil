import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FarmingsimulatorPage } from './farmingsimulator.page';

describe('FarmingsimulatorPage', () => {
  let component: FarmingsimulatorPage;
  let fixture: ComponentFixture<FarmingsimulatorPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmingsimulatorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
