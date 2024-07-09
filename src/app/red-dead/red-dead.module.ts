import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RedDeadPageRoutingModule } from './red-dead-routing.module';

import { RedDeadPage } from './red-dead.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RedDeadPageRoutingModule
  ],
  declarations: [RedDeadPage]
})
export class RedDeadPageModule {}
