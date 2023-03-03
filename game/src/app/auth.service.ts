import { Injectable } from '@angular/core';


export type Utente={
  name: string,
  username: string,
  password: string,
  fav_animals:string[]
}

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  users: Utente[]
  isLoggedIn:boolean
  active_user: Utente
  fav_animals:string[]

  constructor() {
    //array che in teoria si riempie dei dati di tutti gli utenti 
    this.users=[
      {
        name:"Andrea",
        username:"pp@kk.it",
        password: "napoli",
        fav_animals:['Struzzo']
      },
      {
        name:"Mattia",
        username:"ppp@kkk.it",
        password: "napoli11",
        fav_animals:['Gatto']
      }
    ] 
    this.isLoggedIn=false
    this.active_user={
      name: "", username: "", password:"", fav_animals:[]
    }
    this.fav_animals=[]

  }

  public login(username: string, password: string): boolean {
    let trovato=false
    //per il login idealmente va fatta una chiamata al database per chiedere, dato username e pw, il resto dei dati dell'utente
    this.users.forEach(user => {
      if(user.username ==  username && user.password==password){
        this.isLoggedIn = true; 
        this.active_user= user
        trovato=true
        this.fav_animals=this.active_user.fav_animals
      }
    });
    return trovato
    
  }

  public signup(single_user: Utente) {
    this.users.push(single_user)
    this.isLoggedIn = true; 
    this.active_user= single_user
    console.log(this.active_user)
    console.log(this.users)
  }

  logout() {
    this.isLoggedIn = false;
    this.active_user= {
      name: "", username: "", password:"", fav_animals:[]
    }
  }

}
