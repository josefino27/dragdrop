import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Maso1 } from '../models/data';

@Injectable({
  providedIn: 'root'
})
export class CardsService {


  constructor(private http: HttpClient) { 
  }


  trae1(){
    return this.http.get<Maso1>('https://www.deckofcardsapi.com/api/deck/new/draw/?count=5');
  }
  trae2(){
    return this.http.get<Maso1>('https://www.deckofcardsapi.com/api/deck/new/draw/?count=1');
  }
}
