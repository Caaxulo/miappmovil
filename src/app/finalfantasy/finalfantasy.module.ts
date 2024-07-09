import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FinalfantasyPageRoutingModule } from './finalfantasy-routing.module';

import { FinalfantasyPage } from './finalfantasy.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FinalfantasyPageRoutingModule
  ],
  declarations: [FinalfantasyPage]
})
export class FinalfantasyPageModule {}
