import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AñadirIniciativaPage } from './añadir-iniciativa';

@NgModule({
  declarations: [
    AñadirIniciativaPage,
  ],
  imports: [
    IonicPageModule.forChild(AñadirIniciativaPage),
  ],
})
export class AñadirIniciativaPageModule {}
