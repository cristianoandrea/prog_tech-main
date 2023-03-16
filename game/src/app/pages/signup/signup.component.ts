import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, Utente } from '../../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  name: string;
  surname:string;
  email: string;
  password: string;
  sex:string;
  birthdate:any
  selectedAnimals:string
  animals = ['Dog', 'Cat', 'Bird', 'Fish', 'Rabbit'];
  utente: Utente

  constructor(private authService: AuthService, private router: Router) { 
    this.selectedAnimals=''
    this.utente= {
      name: "", email: ""
    }
    this.email=''
    this.password=''
    this.name=''
    this.surname=''
    this.sex=''

  }

  ngOnInit(): void {
    if (this.authService.getValue() ==true) {
      this.router.navigate(['/'])
    }
  }

  signup(nome: string, cognome:string, email: string, pw: string, sesso:string, data:any, animale: string) {
    let nuovo_utente:Utente={
      name: nome, email:email
    }
    console.log(nome, cognome, email, pw, sesso,data, animale)
    this.authService.signup(nome, cognome, email, pw, sesso, data, animale)
    
  }

}
