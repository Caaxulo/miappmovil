import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage {
  username: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(
    private router: Router,
    private toastController: ToastController
  ) {}

  async onRegister() {
    if (!this.username || !this.email || !this.password || !this.confirmPassword) {
      await this.presentToast('Por favor, completa todos los campos.', 'warning');
    } else if (!this.validateEmail(this.email)) {
      await this.presentToast('Por favor, ingresa un correo electrónico válido.', 'danger');
    } else if (!this.validatePassword(this.password)) {
      await this.presentToast('La contraseña debe tener al menos 8 caracteres y contener al menos un número.', 'danger');
    } else if (this.password !== this.confirmPassword) {
      await this.presentToast('Las contraseñas no coinciden.', 'danger');
    } else {
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      const userExists = users.some((user: any) => user.username === this.username || user.email === this.email);

      if (userExists) {
        await this.presentToast('El usuario o correo electrónico ya está en uso.', 'danger');
      } else {
        users.push({ username: this.username, email: this.email, password: this.password });
        localStorage.setItem('users', JSON.stringify(users));
        await this.presentToast('Registro exitoso. Ahora puedes iniciar sesión.', 'success');
        this.router.navigate(['/login']);
      }
    }
  }

  validateEmail(email: string): boolean {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  }

  validatePassword(password: string): boolean {
    const re = /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/;
    return password.length >= 8 && re.test(password);
  }

  async presentToast(message: string, color: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      color: color,
    });
    await toast.present();
  }
}
