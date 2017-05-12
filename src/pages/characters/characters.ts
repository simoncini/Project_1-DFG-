import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { Character } from '../../components/character/character';
import { Item } from '../../components/item/item';
import { AppData } from '../../providers/app-data';
import { CharPage } from '../char-page/char-page';


@IonicPage()
@Component({
  selector: 'page-characters',
  templateUrl: 'characters.html',
})
export class Characters {

  private charsList:Array<Character>;
  private charsListInitial:Array<Character>;
  private charsListDownload:Array<Character>;

  private charactersList;

  constructor(public navCtrl: NavController, public navParams: NavParams , public storage:Storage , public appData: AppData) {

    /*this.charsList = [
      new Character("Tony Stark" , new Array( "Mk_1",  "Mk_2" , "Mk_3" ) , new Array("Jarvis") ),
      new Character("Bruce Banner" , null , null ),
      new Character("Steve Rogers" , null , null ),
      new Character("Thor" , null , null )
    ];*/
    this.charsList = this.appData.getChar();

    //this.appData.getRemoteChars(this.charsList);

    for (let entry of this.charsList) {
      console.log("Nome: "+entry.name);
      console.log("Rinforzi: "+entry.reinforcements);
      console.log("Oggetti: "+entry.items);
    }

  }

  ionViewDidLoad() {
    //this.appData.getRemoteChars(this.charsList);
  }

  public back(){
    this.navCtrl.pop();
  }

  public showChar(char:Character){
    this.navCtrl.push(CharPage,{
      firstPar:char
    });
  }

}
