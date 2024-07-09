import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EldenRingPage } from './elden-ring.page';

const routes: Routes = [
  {
    path: '',
    component: EldenRingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EldenRingPageRoutingModule {}
