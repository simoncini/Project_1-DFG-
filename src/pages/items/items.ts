import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , AlertController} from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { Item } from '../../components/item/item';
import { ItemPage } from '../item-page/item-page';
import { AppData } from '../../providers/app-data';

@IonicPage()
@Component({
  selector: 'page-items',
  templateUrl: 'items.html',
})
export class Items {

  private itemsList:Array<Item>;
  private itemsListInitial:Array<Item>;
  private itemsListDownload:Array<Item>;
  searchTerm: string = '';

  constructor(public navCtrl: NavController, public navParams: NavParams , private alertCtrl: AlertController, public appData: AppData, public storage:Storage ) {

    //this.itemsList = new Array();

    /*
    *    FIX ME: ANDREBBE ORDINATO UNA SOLA VOLTA , PRIMA DI ACCEDERLO E NON OGNI VOLTA CHE SI TORNA SULLA PAGINA
    */

    this.itemsList = this.appData.getItems().sort((n1,n2) => {
      if (n1.name > n2.name) {
        return 1;
      }

      if (n1.name < n2.name) {
          return -1;
        }

        return 0;
      });


    this.itemsList = this.appData.getItems();

    this.itemsListInitial = this.itemsList;

  }

  public ionViewDidLoad() {
    this.appData.getRemoteItems(this.itemsList);
  }

  public back(){
    this.navCtrl.pop();
  }

  public showItem(item:Item){
    this.navCtrl.push(ItemPage,{
      firstPar:item
    });
  }

  public storeItems(array:Array<Item>){
    this.storage.ready().then(() => {
      this.storage.set('itemsList', this.itemsList );
    });
  }

  public getLocalItems(){
    this.storage.ready().then(() => {
      return this.storage.get('itemsList');
    });
  }

  /*addItem(name:string , description:string , img:string){
    this.storage.ready().then(() => {
      this.storage.set( name , new Item(name,description,img) );
     });
     let alert = this.alertCtrl.create({
       title: 'Inserimento',
       subTitle: name + description + img,
     });
     alert.present();
  }*/

  public searchItem(event:any){

    this.itemsList = this.itemsListInitial;
    var q = event.target.value;

    if (q.trim() == '') {
        return;
    }

    this.itemsList = this.itemsList.filter((v) => {
      if (v.name.toLowerCase().indexOf(q.toLowerCase()) > -1 ){
        return true;
      }
      return false;
    })
  }

}
