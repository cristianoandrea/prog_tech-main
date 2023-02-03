import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  public game_started:boolean

  constructor() { 
    this.game_started=false
  }

  public start(){
    this.game_started=!this.game_started;
  } 
  
  ngOnInit(): void {
  }

}
