import { ComponentFixture, TestBed } from '@angular/core/testing';
import { KingdomheartsPage } from './kingdomhearts.page';

describe('KingdomheartsPage', () => {
  let component: KingdomheartsPage;
  let fixture: ComponentFixture<KingdomheartsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(KingdomheartsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
