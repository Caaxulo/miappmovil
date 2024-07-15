import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-rpg',
  templateUrl: './rpg.page.html',
  styleUrls: ['./rpg.page.scss'],
})
export class RpgPage implements OnInit {
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

