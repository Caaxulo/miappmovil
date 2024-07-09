import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FinalfantasyPage } from './finalfantasy.page';

const routes: Routes = [
  {
    path: '',
    component: FinalfantasyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FinalfantasyPageRoutingModule {}
