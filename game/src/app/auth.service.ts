import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NullTemplateVisitor } from '@angular/compiler';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

export type Utente={
  name: string,
  email: string,
}


@Injectable({ providedIn: 'root' })

export class AuthService {

  public loggato:boolean
  private _isLoggedIn= new BehaviorSubject<boolean>(false)
  isLoggedIn = this._isLoggedIn.asObservable()

  constructor(private http: HttpClient, private router: Router) { 
   
    
    
    this.loggato=false
    
    //se nel localstorage l'id è non vuoto, allora 
    //logged id viene mezzo a true
    const id= localStorage.getItem('id')
    this._isLoggedIn.next(!!id)

  }

  public getValue():boolean{
    return this._isLoggedIn.getValue()
  }

  public login(email: string, password: string): boolean {
    
    

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
  
    this.http.post<any>('http://localhost:4000/api/user/login', { email: email, password: password }, httpOptions)
      .subscribe(response => {
        
        this._isLoggedIn.next(true)
        this.loggato=true
        localStorage.setItem('utente', response.name)
        localStorage.setItem('email', response.email)
        console.log(response._id)
        localStorage.setItem('id', response._id)
        console.log(localStorage.getItem('utente'))
        this.router.navigate(['/'])
        
      }, error => {
        console.error(error);
      });
    return this.loggato;

  }

  public signup(nome: string, cognome:string, email: string, pw: string, sesso:string, data:string, animale: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    this.http.post<any>('http://localhost:4000/api/user/signup', 
    {email:email, password:pw, name:nome, cognome:cognome, sesso:sesso,nascita:data, animali:animale }, httpOptions)
      .subscribe(response => {
        // Handle successful response from the server here
        this._isLoggedIn.next(true)
        localStorage.setItem('utente', nome)
        localStorage.setItem('email', email)
        localStorage.setItem('id', response._id)
        console.log(response)
      }, error => {
        
        console.error(error);
      });
    this.router.navigate(['/'])
    
  }

  public logout() {
    
    localStorage.removeItem('utente')
    localStorage.removeItem('email')
    localStorage.removeItem('id')
    this._isLoggedIn.next(false)
    
  }

}



