import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { Item } from '../components/item/item';
import { Character } from '../components/character/character';


@Injectable()
export class AppData {


  itemList = new Array<Item>();
  sortedItemList;
  charList = new Array<Character>();
  sortedCharList;

  constructor(public http: Http) {
    console.log('AppData Provider: Initializing data structure..');

    // Importazione Personaggi
    this.http.get('https://api.myjson.com/bins/18v3pd').map(res => res.json()).subscribe(data => {
      for (let entry of data) {
        let ar = entry.reinforcements;
        let ai = entry.items;
        let c = new Character( entry.name , ai , ar );
        this.charList.push( c );
      }
    });

    // Importazione Oggetti https://api.myjson.com/bins/1f20h1
    //this.http.get('https://api.myjson.com/bins/1f98fd').map(res => res.json()).subscribe(data => {
    this.http.get('https://api.myjson.com/bins/1f20h1').map(res => res.json()).subscribe(data => {
      console.log("Length = "+data.length);
      for (let entry of data) {
        //console.log("GOT: "+entry.name);
        this.itemList.push( new Item( entry.ID, entry.name, entry.char, entry.stats4 , entry.icon) );
      }
    });

  }



  public getRemoteChars( array:Array<Character>) {
    /*this.http.get('https://api.myjson.com/bins/18v3pd').map(res => res.json()).subscribe(data => {
      for (let entry of data) {
        let ar = entry.reinforcements;
        let ai = entry.items;
        let c = new Character( entry.name , ai , ar );
        array.push( c );
      }
    });*/
  }

  public getRemoteItems(array:Array<Item>){
    /*this.http.get('https://api.myjson.com/bins/1f98fd').map(res => res.json()).subscribe(data => {
      console.log("Length = "+data.length);
      for (let entry of data) {
        console.log("GOT: "+entry.name);
        array.push( new Item( entry.ID, entry.name, entry.description, entry.icon) );
      }
    });*/
  }

  public getItems(){
    return this.itemList;
  }

  public getChar(){
    return this.charList;
  }






}
