import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MundoAbiertoPage } from './mundo-abierto.page';

const routes: Routes = [
  {
    path: '',
    component: MundoAbiertoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MundoAbiertoPageRoutingModule {}
