import { Component, Input, OnInit } from '@angular/core';

export interface Card {
  descrizione: string;
  nome: string;
  prezzo: number;
  producer:string;
  image:{
    path:string,
    alt:string
  }
  _id:string
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() card: Card | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
