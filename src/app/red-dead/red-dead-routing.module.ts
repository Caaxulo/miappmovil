import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RedDeadPage } from './red-dead.page';

const routes: Routes = [
  {
    path: '',
    component: RedDeadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RedDeadPageRoutingModule {}
