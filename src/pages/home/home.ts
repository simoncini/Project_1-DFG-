import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { InsertPage } from '../insert-page/insert-page';
import { Characters } from '../characters/characters';
import { Items } from '../items/items';
import { AppData } from '../../providers/app-data';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,public appData:AppData) {
  }

  public openInsertPage(){
    this.navCtrl.push( InsertPage );
  }

  public openChars(){
    this.navCtrl.push( Characters );
  }

  public openItems(){
    this.navCtrl.push( Items );
  }


}
