import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Item } from '../../components/item/item';

@IonicPage()
@Component({
  selector: 'page-item-page',
  templateUrl: 'item-page.html',
})
export class ItemPage {

  public item:Item;
  public title:string;
  public char_:string;
  public stats4:string;
  public icon:string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.item = navParams.get("firstPar");
    this.title = this.item.name;
    this.char_ = this.item.char;
    this.stats4 = this.item.stats4;
    this.icon = this.item.icon;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ItemPage');
  }

}
