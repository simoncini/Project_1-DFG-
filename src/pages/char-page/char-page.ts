import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Character } from '../../components/character/character';

@IonicPage()
@Component({
  selector: 'page-char-page',
  templateUrl: 'char-page.html',
})
export class CharPage {

  public character:Character;
  public name:string;
  public items:Array<String>;
  public reinforcements:Array<String>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.character = navParams.get("firstPar");
    this.name = this.character.name;
    this.items = this.character.items;
    this.reinforcements = this.character.reinforcements;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ItemPage');
  }

}
