import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FinalfantasyPage } from './finalfantasy.page';

describe('FinalfantasyPage', () => {
  let component: FinalfantasyPage;
  let fixture: ComponentFixture<FinalfantasyPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalfantasyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
