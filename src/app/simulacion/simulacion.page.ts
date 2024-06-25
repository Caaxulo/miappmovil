import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-simulacion',
  templateUrl: './simulacion.page.html',
  styleUrls: ['./simulacion.page.scss'],
})
export class SimulacionPage implements OnInit {
  username: string = '';

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.username = this.authService.username;
  }

}
