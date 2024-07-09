import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ThewitcherPage } from './thewitcher.page';

describe('ThewitcherPage', () => {
  let component: ThewitcherPage;
  let fixture: ComponentFixture<ThewitcherPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ThewitcherPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
