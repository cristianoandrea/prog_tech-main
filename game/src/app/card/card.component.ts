import { Component, Input, OnInit } from '@angular/core';

export interface Card {
  p: string;
  h1: string;
  button: string;
  img: string;
  alt:string
  href: string;
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
