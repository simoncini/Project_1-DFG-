import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppData } from '../../providers/app-data';

@IonicPage()
@Component({
  selector: 'page-reinforcements',
  templateUrl: 'reinforcements.html',
})
export class Reinforcements {

  reinforcementsList;

  constructor(public navCtrl: NavController, public navParams: NavParams, public appData:AppData ) {
    this.reinforcementsList = this.appData.getReinforcements().sort((n1,n2) => {
      if (n1.name > n2.name) {
        return 1;
      }

      if (n1.name < n2.name) {
          return -1;
        }

        return 0;
      });;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Reinforcements');
  }

}
