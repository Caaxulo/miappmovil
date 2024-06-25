import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _username: string = '';

  constructor() {
    // Recuperar el nombre de usuario almacenado al inicializar el servicio
    this._username = localStorage.getItem('username') || '';
  }

  get username(): string {
    return this._username;
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('username');
  }

  login(username: string, password: string): boolean {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find((user: any) => user.username === username && user.password === password);

    if (user) {
      localStorage.setItem('username', username);
      this._username = username; // Actualizar el nombre de usuario en el servicio
      return true;
    }
    return false;
  }

  logout(): void {
    localStorage.removeItem('username');
    this._username = ''; // Limpiar el nombre de usuario en el servicio al cerrar sesión
  }
}
