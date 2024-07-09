import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HorizonPageRoutingModule } from './horizon-routing.module';

import { HorizonPage } from './horizon.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HorizonPageRoutingModule
  ],
  declarations: [HorizonPage]
})
export class HorizonPageModule {}
