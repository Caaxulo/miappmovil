import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EldenRingPage } from './elden-ring.page';

describe('EldenRingPage', () => {
  let component: EldenRingPage;
  let fixture: ComponentFixture<EldenRingPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EldenRingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
