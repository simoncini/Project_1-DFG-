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
  public description:string;
  public icon:string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.item = navParams.get("firstPar");
    this.title = this.item.name;
    this.description = this.item.description;
    this.icon = this.item.icon;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ItemPage');
  }

}
