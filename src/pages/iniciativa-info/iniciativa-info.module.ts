import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IniciativaInfoPage } from './iniciativa-info';

@NgModule({
  declarations: [
    IniciativaInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(IniciativaInfoPage),
  ],
})
export class IniciativaInfoPageModule {}
