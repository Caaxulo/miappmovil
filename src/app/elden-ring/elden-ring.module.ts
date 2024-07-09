import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EldenRingPageRoutingModule } from './elden-ring-routing.module';

import { EldenRingPage } from './elden-ring.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EldenRingPageRoutingModule
  ],
  declarations: [EldenRingPage]
})
export class EldenRingPageModule {}
