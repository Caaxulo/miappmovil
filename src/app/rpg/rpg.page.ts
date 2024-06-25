import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-rpg',
  templateUrl: './rpg.page.html',
  styleUrls: ['./rpg.page.scss'],
})
export class RpgPage implements OnInit {
  username: string = '';

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.username = this.authService.username;
  }
}
