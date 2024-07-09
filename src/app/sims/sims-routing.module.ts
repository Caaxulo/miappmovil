import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SimsPage } from './sims.page';

const routes: Routes = [
  {
    path: '',
    component: SimsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SimsPageRoutingModule {}
