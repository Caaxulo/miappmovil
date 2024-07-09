import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FarmingsimulatorPageRoutingModule } from './farmingsimulator-routing.module';

import { FarmingsimulatorPage } from './farmingsimulator.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FarmingsimulatorPageRoutingModule
  ],
  declarations: [FarmingsimulatorPage]
})
export class FarmingsimulatorPageModule {}
