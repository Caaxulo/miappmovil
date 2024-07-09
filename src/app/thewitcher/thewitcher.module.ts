import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ThewitcherPageRoutingModule } from './thewitcher-routing.module';

import { ThewitcherPage } from './thewitcher.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ThewitcherPageRoutingModule
  ],
  declarations: [ThewitcherPage]
})
export class ThewitcherPageModule {}
