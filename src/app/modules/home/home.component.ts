import { CdkDrag, CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Card } from 'src/app/models/data';
import { CardsService } from 'src/app/services/cards.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  cartas1: Card[] = [];
  cartas2: Card[] = [];
  filtera= "";
  filterb = "";
  constructor(private cards: CardsService) { }

  ngOnInit() {

    this.loadCards();
    this.loadCards2();

  }

  drop(event: CdkDragDrop<any[]>) {

    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  loadCards2() {
    console.log(this.cards.trae2())
    this.cards.trae2().subscribe(resp => {
      this.cartas2.push(...resp.cards)
      console.log(this.cartas2)
    })
  }
  loadCards() {
    this.cards.trae1().subscribe(resp => {
      this.cartas1.push(...resp.cards)
      console.log(this.cartas1)
    })
  }
  predicate(event: CdkDrag<any>) {
    return event.data <= 9;
  }
  predicate2(event: CdkDrag<any>) {
    return event.data == 10 || event.data == "ACE" || event.data == "KING" || event.data == "QUEEN" || event.data == "JACK"
  }

  traermas() {
    this.cartas1 = [];
    this.cartas2 = [];
    return this.loadCards(),this.loadCards2();
  }
  ngOnDestroy() {
  }

}
