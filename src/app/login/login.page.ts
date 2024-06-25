import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  username: string = '';
  password: string = '';

  constructor(
    private router: Router,
    private toastController: ToastController,
    private authService: AuthService
  ) {}

  async onSubmit() {
    if (!this.username || !this.password) {
      await this.presentToast('Por favor, completa todos los campos.', 'warning');
    } else {
      const loginSuccess = this.authService.login(this.username, this.password);
      if (loginSuccess) {
        this.router.navigate(['/home']);
      } else {
        await this.presentToast('Usuario o contraseña incorrectos.', 'danger');
      }
    }
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
