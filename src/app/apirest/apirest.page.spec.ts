import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';
import { ApirestPage } from './apirest.page';
import { AuthService } from '../services/auth.service'; 

describe('ApirestPage', () => {
  let component: ApirestPage;
  let fixture: ComponentFixture<ApirestPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ApirestPage],
      imports: [
        IonicModule.forRoot(),
        HttpClientModule,  
        
      ],
      providers: [AuthService]  
    }).compileComponents();

    fixture = TestBed.createComponent(ApirestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
