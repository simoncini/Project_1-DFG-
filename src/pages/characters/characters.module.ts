import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Characters } from './characters';

@NgModule({
  declarations: [
    Characters,
  ],
  imports: [
    IonicPageModule.forChild(Characters),
  ],
  exports: [
    Characters
  ]
})
export class CharactersModule {}
