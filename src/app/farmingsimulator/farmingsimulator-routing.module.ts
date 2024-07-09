import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FarmingsimulatorPage } from './farmingsimulator.page';

const routes: Routes = [
  {
    path: '',
    component: FarmingsimulatorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FarmingsimulatorPageRoutingModule {}
