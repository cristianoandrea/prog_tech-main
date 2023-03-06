import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NullTemplateVisitor } from '@angular/compiler';

export type Utente={
  name: string,
  email: string,
}

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  
  isLoggedIn:boolean
  active_user: Utente
  fav_animals:string[]
  error:any=null
  isLoading:any

  constructor(private http: HttpClient) { 
    this.isLoading=null
    //array che in teoria si riempie dei dati di tutti gli utenti 
     
    this.isLoggedIn=false
    this.active_user={
      name: "", email: ""
    }
    this.fav_animals=[]

  }

  public login(email: string, password: string): boolean {
    
    this.isLoading=true
    this.error=NullTemplateVisitor

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
  
    this.http.post<any>('http://localhost:4000/api/user/login', { email: email, password: password }, httpOptions)
      .subscribe(response => {
        // Handle successful response from the server here
        this.isLoggedIn = true; 
        this.active_user.email=response.email
        this.active_user.name=response.name
        console.log(response)
      }, error => {
        this.error=error
        this.isLoading=false
        console.error(error);
      });
  
    return this.isLoggedIn;

  }

  public signup(nome: string, cognome:string, email: string, pw: string, sesso:string, data:string, animale: string[]) {
    //email, password,name ,cognome, sesso, dataNascita, favoriteAnimal

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    this.http.post<any>('http://localhost:4000/api/user/signup', 
    {email, pw, nome, cognome, sesso, data, animale }, httpOptions)
      .subscribe(response => {
        // Handle successful response from the server here
        this.isLoggedIn = true; 
        
        console.log(response)
      }, error => {
        this.error=error
        this.isLoading=false
        console.error(error);
      });
    this.isLoggedIn = true; 
    //this.active_user= single_user
    //console.log(this.active_user)
    
  }

  logout() {
    this.isLoggedIn = false;
    this.active_user= {
      name: "", email: ""
    }
  }

}



/*
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
    */