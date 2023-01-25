import { Component, Input } from '@angular/core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-adventure-game',
  templateUrl: './adventure-game.component.html',
  styleUrls: ['./adventure-game.component.css']
})
export class AdventureGameComponent {

  private animalsData = [
    { name: 'Lion', description: 'The lion is a species of big cat.' },
    { name: 'Elephant', description: 'The elephant is a large mammal.' },
    // other animals data
  ];

  @Input() animal: any; // animal data passed from the parent component
  currentMission: number = 0;
  missions: any[];
  
  // use animal data in the game logic
  startGame() {
    console.log(`Starting game for animal: ${this.animal.name}`);
    this.missions = this.adventureGameService.getAnimalsMissions(this.animal.name);
    this.currentMission = 1; // start with the first mission
  }

  getAnimalData() {
    return this.animalsData;
  }

  getAnimalMissions(animalName: string) {
    // code to return the missions for the selected animal
  }
}