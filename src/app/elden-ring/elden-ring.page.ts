import { Component, OnInit, OnDestroy } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { AppComponent } from '../app.component';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-elden-ring',
  templateUrl: './elden-ring.page.html',
  styleUrls: ['./elden-ring.page.scss'],
})
export class EldenRingPage implements OnInit, OnDestroy {
  username: string = '';
  videoUrl: SafeResourceUrl;
  zoomLevel: number = 100;
  originalFontSize: string = '';
  maxZoomLevel: number = 150;

  constructor(private sanitizer: DomSanitizer, private authService: AuthService) {
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/K-T-kPvlZt0?si=3sz9SvDTz1_Tv20g");
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
      card.classList.remove('zoom-animation'); // Remove animation class if it exists
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
