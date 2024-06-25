import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AuthService } from './services/auth.service'; // Asegúrate de importar AuthService

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  pageTitle: string = '';
  username: string = '';

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.setPageTitle(); // Actualiza el título de la página al cambiar de ruta
      }
    });
  }

  setPageTitle() {
    switch (this.router.url) {
      case '/home':
        this.pageTitle = 'Categorías';
        break;
      case '/mundo-abierto':
        this.pageTitle = 'Juegos de mundo abierto';
        break;
      case '/rpg':
        this.pageTitle = 'Juegos RPG';
        break;
      case '/simulacion':
        this.pageTitle = 'Juegos de Simulación';
        break;
      default:
        this.pageTitle = '';
        break;
    }
  }

  showSideMenu(): boolean {
    const excludedRoutes = ['/login'];
    return !excludedRoutes.includes(this.router.url);
  }

  showToolbar(): boolean {
    const excludedRoutes = ['/login'];
    return !excludedRoutes.includes(this.router.url);
  }

  setUsername(username: string) {
    this.username = username;
  }

  isLoggedIn(): boolean {
    return this.authService.isAuthenticated();
  }

  logout() {
    this.authService.logout(); // Llama al método de logout del AuthService
    this.router.navigate(['/login']); // Redirige al usuario a la página de login
  }
}
