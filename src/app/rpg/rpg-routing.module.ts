import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RpgPage } from './rpg.page';

const routes: Routes = [
  {
    path: '',
    component: RpgPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RpgPageRoutingModule {}
