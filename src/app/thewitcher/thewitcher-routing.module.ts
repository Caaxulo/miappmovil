import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ThewitcherPage } from './thewitcher.page';

const routes: Routes = [
  {
    path: '',
    component: ThewitcherPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ThewitcherPageRoutingModule {}
