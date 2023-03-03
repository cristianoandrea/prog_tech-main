import { Component, OnInit } from '@angular/core';
import { AuthService, Utente } from '../../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  username: string;
  email: string;
  password: string;
  selectedAnimals:string
  animals = ['Dog', 'Cat', 'Bird', 'Fish', 'Rabbit'];
  utente: Utente

  constructor(private authService: AuthService) { 
    this.selectedAnimals=''
    this.utente= {
      name: "", username: "", password:"", fav_animals:[]
    }
    this.email=''
    this.password=''
    this.username=''

  }

  ngOnInit(): void {
  }

  signup(username: string, email: string, pw: string, animale: string[]) {
    let nuovo_utente:Utente={
      name: username, username:email, password: pw, fav_animals: animale
    }
    this.authService.signup(nuovo_utente)
    this.utente=nuovo_utente
    this.authService.login(email, pw)
    console.log(nuovo_utente)
  }

}
