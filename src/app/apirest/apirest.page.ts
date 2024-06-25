import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppComponent } from '../app.component';
import { AuthService } from '../services/auth.service';

interface Amiibo {
  name: string;
  image: string;
  gameSeries: string;
}

@Component({
  selector: 'app-apirest',
  templateUrl: './apirest.page.html',
  styleUrls: ['./apirest.page.scss'],
})
export class ApirestPage implements OnInit {
  amiibos: Amiibo[] = [];
  username: string = '';
  seriesOfInterest: string[] = [
    'Mario',
    'Super Smash Bros.',
    'Legend of Zelda',
    'Splatoon',
    'Kirby',
    'Yoshi',
    'Fire Emblem',
    'Pokemon',
    'Metroid'
  ];

  constructor(private http: HttpClient, private authService: AuthService) { }

  ngOnInit() {
    this.username = this.authService.username;
    this.http.get<any>('https://www.amiiboapi.com/api/amiibo/?character')
      .subscribe(res => {
        console.log(res);
        this.amiibos = res.amiibo.filter((amiibo: Amiibo) => this.seriesOfInterest.includes(amiibo.gameSeries));
      });
  }
}
