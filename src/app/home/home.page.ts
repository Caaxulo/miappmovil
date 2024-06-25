import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy {
  username: string = '';
  zoomLevel: number = 100; // Nivel de zoom inicial (porcentaje)
  originalFontSize: string = ''; // Almacena el tamaño de fuente original

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.username = this.authService.username;
    // Guardar el tamaño de fuente original al cargar la página
    this.originalFontSize = window.getComputedStyle(document.body).fontSize;
  }

  ngOnDestroy() {
    // Restaurar tamaño de fuente original al salir de la página
    const cards = document.querySelectorAll('ion-card-content');
    cards.forEach(card => {
      card.style.fontSize = this.originalFontSize;
    });
  }

  zoomIn() {
    this.zoomLevel += 10;
    this.updateZoom();
  }

  zoomOut() {
    if (this.zoomLevel > 100) { // Establece el tamaño mínimo
      this.zoomLevel -= 10;
      this.updateZoom();
    }
  }

  updateZoom() {
    const cards = document.querySelectorAll('ion-card-content');
    cards.forEach(card => {
      card.style.fontSize = `${Math.max(this.zoomLevel, 100)}%`; // Garantiza el tamaño mínimo
    });
  }
}
