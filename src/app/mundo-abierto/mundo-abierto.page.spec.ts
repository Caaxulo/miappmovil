import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MundoAbiertoPage } from './mundo-abierto.page';

describe('MundoAbiertoPage', () => {
  let component: MundoAbiertoPage;
  let fixture: ComponentFixture<MundoAbiertoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MundoAbiertoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
