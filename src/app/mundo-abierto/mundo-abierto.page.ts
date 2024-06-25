import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-mundo-abierto',
  templateUrl: './mundo-abierto.page.html',
  styleUrls: ['./mundo-abierto.page.scss'],
})
export class MundoAbiertoPage implements OnInit {
  username: string = '';

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.username = this.authService.username;
  }

}
