import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { Item } from '../../components/item/item';

@IonicPage()
@Component({
  selector: 'page-insert-page',
  templateUrl: 'insert-page.html',
})
export class InsertPage {

  storage;
  ac;

  constructor(public navCtrl: NavController, public navParams: NavParams, storage: Storage , private alertCtrl: AlertController) {
    this.storage = storage;
    this.storage.set( "Niccolò" ,  "Simoncini");
    this.ac = alertCtrl;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InsertPage');
  }

  addItem(id: string , name:string , description:string , img:string){
    this.storage.ready().then(() => {
      this.storage.set( name , new Item(id ,name,description,img) );
      this.storage.set('Niccolò' , 'Simoncini');
      this.storage.set('Tony' , 'Stark');
     });
     let alert = this.ac.create({
       title: 'Inserimento',
       subTitle: name + description + img,
     });
     alert.present();
  }

  getItem(){
    var tmp;
    this.storage.get('Niccolò').then((val) => {
      tmp=val;
      var l=-5;
      this.storage.length().then((data) =>{
        l=data;
        let alert = this.ac.create({
          title: 'Risultato ricerca su '+ l +' risultati:',
          subTitle: tmp ,
        });
        alert.present();
        return data;
      });

    } );
  }

}
