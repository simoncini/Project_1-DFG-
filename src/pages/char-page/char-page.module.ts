import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CharPage } from './char-page';

@NgModule({
  declarations: [
    CharPage,
  ],
  imports: [
    IonicPageModule.forChild(CharPage),
  ],
  exports: [
    CharPage
  ]
})
export class CharPageModule {}
