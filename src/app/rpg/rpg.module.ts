import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RpgPageRoutingModule } from './rpg-routing.module';

import { RpgPage } from './rpg.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RpgPageRoutingModule
  ],
  declarations: [RpgPage]
})
export class RpgPageModule {}
