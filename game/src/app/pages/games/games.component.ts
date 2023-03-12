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
  public youtube: any

  constructor() { 
    this.game_started=false
    this.quiz={
      h1: "Quiz",
      p: "Test you knowledge about animals",
      button:"Start now!",
      href: '/quiz',
      href_img:'/quiz',
      img:'https://i.postimg.cc/bvnw7msq/quiz.jpg',
      alt:'monkeys'
    }
    this.images={
      h1: "Image generator",
      p: "What's better than a pet random image generator? Nothing, except SSC Napoli i suppose",
      button:"Start now!",
      href: '/images',
      href_img:'/images',
      img:'https://i.postimg.cc/Xqs5rsfT/random.png',
      alt:'shark'
    }
    this.youtube={
      h1: "Videos",
      p: "Here you'll find a selection of videos from youtube",
      button:"Start now!",
      href: '/youtube',
      href_img:'/youtube',
      img:'https://i.postimg.cc/MZDNszPD/gorilla.jpg',
      alt:'gorilla'
    }
  }

  public start(){
    this.game_started=!this.game_started;
  } 
  
  ngOnInit(): void {
  }

}
