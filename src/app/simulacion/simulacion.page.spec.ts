import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SimulacionPage } from './simulacion.page';

describe('SimulacionPage', () => {
  let component: SimulacionPage;
  let fixture: ComponentFixture<SimulacionPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SimulacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
