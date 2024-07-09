import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RedDeadPage } from './red-dead.page';

describe('RedDeadPage', () => {
  let component: RedDeadPage;
  let fixture: ComponentFixture<RedDeadPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RedDeadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
