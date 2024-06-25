import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MundoAbiertoPageRoutingModule } from './mundo-abierto-routing.module';

import { MundoAbiertoPage } from './mundo-abierto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MundoAbiertoPageRoutingModule
  ],
  declarations: [MundoAbiertoPage]
})
export class MundoAbiertoPageModule {}
