import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AgregarRasp } from './agregar-rasp';

@NgModule({
  declarations: [
    AgregarRasp,
  ],
  imports: [
    IonicPageModule.forChild(AgregarRasp),
  ],
})
export class AgregarRaspModule {}
