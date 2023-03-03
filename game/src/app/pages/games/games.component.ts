import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  public game_started:boolean

  public quiz:any
  public images:any

  constructor() { 
    this.game_started=false
    this.quiz={
      h1: "Quiz",
      p: "Metti alla prova le tue innate conoscenze sul mondo animale",
      button:"Inizia ora!",
      href: '/quiz',
      href_img:'https://postimg.cc/ns5s5pmt',
      img:'https://i.postimg.cc/bvnw7msq/quiz.jpg',
      alt:'quadro di scimmie che giocano ad un gioco da tavola'
    }
    this.images={
      h1: "Generatore di immagini",
      p: "Un generatore di immagini casuali di animali. Cosa c'è di meglio? il calcio napoli",
      button:"Inizia ora!",
      href: '/images',
      href_img:'https://postimg.cc/ns5s5pmt',
      img:'https://i.postimg.cc/Xqs5rsfT/random.png',
      alt:'subacquei con squalo vicino'
    }
  }

  public start(){
    this.game_started=!this.game_started;
  } 
  
  ngOnInit(): void {
  }

}
