import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GenteModel } from '../models/data';

@Injectable({
  providedIn: 'root'
})
export class CardsService {


  constructor(private http: HttpClient) { 
  }

  baraja(){
    return this.http.get<GenteModel>('https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
  }
  trae(){
    return this.http.get<GenteModel>('https://www.deckofcardsapi.com/api/deck/new/draw/?count=5');
  }
}
