import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GenteModel } from '../models/data';

@Injectable({
  providedIn: 'root'
})
export class CardsService {


  constructor(private http: HttpClient) { 
  }

  trae(){
    return this.http.get<GenteModel>('https://www.deckofcardsapi.com/api/deck/guokatw0pp52/draw/?count=2');
  }
}
