import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule),
    canActivate: [AuthGuardService]
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'mundo-abierto',
    loadChildren: () => import('./mundo-abierto/mundo-abierto.module').then(m => m.MundoAbiertoPageModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'rpg',
    loadChildren: () => import('./rpg/rpg.module').then(m => m.RpgPageModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'simulacion',
    loadChildren: () => import('./simulacion/simulacion.module').then(m => m.SimulacionPageModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'apirest',
    loadChildren: () => import('./apirest/apirest.module').then(m => m.ApirestPageModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then(m => m.RegistroPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
