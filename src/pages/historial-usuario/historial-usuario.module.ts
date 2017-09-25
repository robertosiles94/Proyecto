import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HistorialUsuarioPage } from './historial-usuario';

@NgModule({
  declarations: [
    HistorialUsuarioPage,
  ],
  imports: [
    IonicPageModule.forChild(HistorialUsuarioPage),
  ],
})
export class HistorialUsuarioPageModule {}
