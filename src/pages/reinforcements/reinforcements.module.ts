import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Reinforcements } from './reinforcements';

@NgModule({
  declarations: [
    Reinforcements,
  ],
  imports: [
    IonicPageModule.forChild(Reinforcements),
  ],
  exports: [
    Reinforcements
  ]
})
export class ReinforcementsModule {}
