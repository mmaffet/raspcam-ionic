import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Raspberry } from './raspberry';

@NgModule({
  declarations: [
    Raspberry,
  ],
  imports: [
    IonicPageModule.forChild(Raspberry),
  ],
})
export class RaspberryModule {}
