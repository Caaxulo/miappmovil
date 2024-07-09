import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HouseflipperPageRoutingModule } from './houseflipper-routing.module';

import { HouseflipperPage } from './houseflipper.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HouseflipperPageRoutingModule
  ],
  declarations: [HouseflipperPage]
})
export class HouseflipperPageModule {}
