import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppComponent } from '../app.component';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-mundo-abierto',
  templateUrl: './mundo-abierto.page.html',
  styleUrls: ['./mundo-abierto.page.scss'],
})
export class MundoAbiertoPage implements OnInit, OnDestroy {
  username: string = '';
  zoomLevel: number = 100; 
  originalFontSize: string = ''; 
  maxZoomLevel: number = 150;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.username = this.authService.username;
    this.originalFontSize = window.getComputedStyle(document.body).fontSize;
  }

  ngOnDestroy() {
    const cards = document.querySelectorAll('ion-card-content');
    cards.forEach(card => {
      card.style.fontSize = this.originalFontSize;
    });
  }

  zoomIn() {
    if (this.zoomLevel < this.maxZoomLevel) {
      this.zoomLevel += 10;
      this.updateZoom();
    }
  }

  zoomOut() {
    if (this.zoomLevel > 100) {
      this.zoomLevel -= 10;
      this.updateZoom();
    }
  }

  updateZoom() {
    const cards = document.querySelectorAll('ion-card-content');
    cards.forEach(card => {
      card.classList.add('zoom-animation');
      card.style.fontSize = `${Math.max(this.zoomLevel, 100)}%`;

     
      card.addEventListener('transitionend', () => {
        card.classList.remove('zoom-animation');
      }, { once: true });
    });
  }

}
