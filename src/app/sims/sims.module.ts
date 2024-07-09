import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SimsPageRoutingModule } from './sims-routing.module';

import { SimsPage } from './sims.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SimsPageRoutingModule
  ],
  declarations: [SimsPage]
})
export class SimsPageModule {}
