import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.css']
})
export class CommunityComponent implements OnInit {

  pets:any[]=[]
  species: string;
  name: string;
  sex: string;
  age: number;
  medicalConditions: string;


  constructor() { 
    this.age=0;
    this.medicalConditions='';
    this.species='';
    this.name='';
    this.sex='';

  }

  ngOnInit(): void {
  }

  onSubmit() {
    const pet = {
      species: this.species,
      name: this.name,
      sex: this.sex,
      age: this.age,
      medicalConditions: this.medicalConditions
    };
    this.pets.push(pet);
    this.species = '';
    this.name = '';
    this.sex = '';
    this.age = 0;
    this.medicalConditions = '';
    console.log(this.pets)
  }
}
