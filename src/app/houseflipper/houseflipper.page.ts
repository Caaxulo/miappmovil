import { Component, OnInit, OnDestroy } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { AppComponent } from '../app.component';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-houseflipper',
  templateUrl: './houseflipper.page.html',
  styleUrls: ['./houseflipper.page.scss'],
})
export class HouseflipperPage implements OnInit, OnDestroy {
  username: string = '';
  videoUrl: SafeResourceUrl;
  zoomLevel: number = 100;
  originalFontSize: string = '';
  maxZoomLevel: number = 150;

  constructor(private sanitizer: DomSanitizer, private authService: AuthService) {
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/7YIjuL8v5SY?si=pkOeHEXoLd4EAbYc");
  }

  showVideo(video: string) {
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(video);
  }

  ngOnInit() {
    this.username = this.authService.username;
    this.originalFontSize = window.getComputedStyle(document.body).fontSize;
  }
  ngOnDestroy() {
    const cards = document.querySelectorAll('ion-card-content');
    cards.forEach(card => {
      card.style.fontSize = this.originalFontSize;
      card.classList.remove('zoom-animation'); 
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
    const descriptions = document.querySelectorAll('ion-card-content p.description') as NodeListOf<HTMLElement>;
    const details = document.querySelectorAll('ion-card-content p.details') as NodeListOf<HTMLElement>;

    descriptions.forEach(description => {
      description.classList.add('zoom-animation');
      description.style.fontSize = `${Math.max(this.zoomLevel, 100)}%`;

      description.addEventListener('transitionend', () => {
        description.classList.remove('zoom-animation');
      }, { once: true });
    });

    details.forEach(detail => {
      detail.classList.add('zoom-animation');
      detail.style.fontSize = `${Math.max(this.zoomLevel, 100)}%`;

      detail.addEventListener('transitionend', () => {
        detail.classList.remove('zoom-animation');
      }, { once: true });
    });
  }
}