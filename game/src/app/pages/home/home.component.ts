import { Component, OnInit } from '@angular/core';
import { Slide } from 'src/app/carousel/carousel.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public info1:any
  public info2:any
  public slides: Slide[]

  constructor() {
    this.info1={
      h1: "Accedi al nostro mediocre catalogo di giochi a tema animale!",
      p: "Troverai un quiz sfiziosissimo ;-)",
      button:"Daje"
    }
    this.info2={
      h1: "Curioso per i mostri che abitano il nostro splendido pianeta?",
      p: "Pensa te... pure qua stai parato sul sito nostro ;-)",
      button: "evvai..."
    }
    this.slides=[
      {
        h1: "Curioso per i mostri che abitano il nostro splendido pianeta?",
        p: "Pensa te... pure qua stai parato sul sito nostro ;-)",
        button: "evvai...",
        img:"https://picsum.photos/id/1011/900/500"
      },
      {
        h1: "Curioso per i mostri che abitano il nostro splendido pianeta?",
        p: "Pensa te... pure qua stai parato sul sito nostro ;-)",
        button: "evvai...",
        img:"https://picsum.photos/id/944/900/500"
      },
      
    ]
   }

  ngOnInit(): void {
  }

}
