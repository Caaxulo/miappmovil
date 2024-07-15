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
  {
    path: 'red-dead',
    loadChildren: () => import('./red-dead/red-dead.module').then( m => m.RedDeadPageModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'horizon',
    loadChildren: () => import('./horizon/horizon.module').then( m => m.HorizonPageModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'elden-ring',
    loadChildren: () => import('./elden-ring/elden-ring.module').then( m => m.EldenRingPageModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'kingdomhearts',
    loadChildren: () => import('./kingdomhearts/kingdomhearts.module').then( m => m.KingdomheartsPageModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'finalfantasy',
    loadChildren: () => import('./finalfantasy/finalfantasy.module').then( m => m.FinalfantasyPageModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'thewitcher',
    loadChildren: () => import('./thewitcher/thewitcher.module').then( m => m.ThewitcherPageModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'farmingsimulator',
    loadChildren: () => import('./farmingsimulator/farmingsimulator.module').then( m => m.FarmingsimulatorPageModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'houseflipper',
    loadChildren: () => import('./houseflipper/houseflipper.module').then( m => m.HouseflipperPageModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'sims',
    loadChildren: () => import('./sims/sims.module').then( m => m.SimsPageModule),
    canActivate: [AuthGuardService]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
