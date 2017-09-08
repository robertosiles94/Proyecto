import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IniciativasPage } from './iniciativas';

@NgModule({
  declarations: [
    IniciativasPage,
  ],
  imports: [
    IonicPageModule.forChild(IniciativasPage),
  ],
})
export class IniciativasPageModule {}
