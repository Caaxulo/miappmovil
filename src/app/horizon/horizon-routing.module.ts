import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HorizonPage } from './horizon.page';

const routes: Routes = [
  {
    path: '',
    component: HorizonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HorizonPageRoutingModule {}
