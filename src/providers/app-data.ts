import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { Item } from '../components/item/item';
import { Character } from '../components/character/character';


@Injectable()
export class AppData {

  constructor(public http: Http) {
    console.log('Hello AppData Provider');
  }


  public getRemoteChars( array:Array<Character>) {
    this.http.get('https://api.myjson.com/bins/18v3pd').map(res => res.json()).subscribe(data => {
      for (let entry of data) {
        let ar = entry.reinforcements;
        let ai = entry.items;
        let c = new Character( entry.name , ai , ar );
        array.push( c );
      }
    });
  }

  public getRemoteItems(array:Array<Item>){
    this.http.get('https://api.myjson.com/bins/1f98fd').map(res => res.json()).subscribe(data => {
      console.log("Length = "+data.length);
      for (let entry of data) {
        console.log("GOT: "+entry.name);
        array.push( new Item( entry.ID, entry.name, entry.description, entry.icon) );
      }
    });
  }

  public getRemoteData(){

    this.http.get('https://api.myjson.com/bins/139zqh').map(res => res.json()).subscribe(data => {
      //let toWrite = data.kind;
      //var v = data.kind;
      //console.log(data);
      //console.log(data[0]);
      //console.log(data[0].ID);
      for (let entry of data) {
        console.log(entry.name);
      }
      return data;
    });
    //this.http.get('http://simoncini.altervista.org/DemonFox/data.json').map( res => res.json()).subscribe(data => {
      //console.log(JSON.stringify(data));
    //});
  }

}
