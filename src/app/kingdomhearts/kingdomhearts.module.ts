import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KingdomheartsPageRoutingModule } from './kingdomhearts-routing.module';

import { KingdomheartsPage } from './kingdomhearts.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KingdomheartsPageRoutingModule
  ],
  declarations: [KingdomheartsPage]
})
export class KingdomheartsPageModule {}
