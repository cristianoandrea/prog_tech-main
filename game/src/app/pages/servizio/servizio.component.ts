import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Card } from 'src/app/card/card.component';

@Component({
  selector: 'app-servizio',
  templateUrl: './servizio.component.html',
  styleUrls: ['./servizio.component.css']
})

/*
export interface Card {
  p: string;
  h1: string;
  button: string;
  img: string;
  alt:string
  href: string;
}

questi i parametri delle cards.... in href metto il link alla ricerca per ottenere quel risultato in frontoffice
*/

export class ServizioComponent implements OnInit {

  servizioType: string;
  servizio:any

  dogsitter = {
    titolo: "Dogsitter",
    p: "Here you'll find all our sites scattered all over Italy!",
    api_call: ""
  };

  veterinario = {
    titolo: "Veterinarian",
    p: "Here you'll find all our sites scattered all over Italy!",
    api_call: ""
  };

  toelettatura = {
    titolo: "Grooming",
    p: "Here you'll find all our sites scattered all over Italy!",
    api_call: ""
  };

  psicologo = {
    titolo: "Psicologo per animali",
    p: "Here you'll find all our sites scattered all over Italy!",
    api_call: ""
  };

  public cards: any
  public cards_servizio: any

  constructor(private route: ActivatedRoute, private http: HttpClient) {
     this.servizioType=''
     
     this.cards=[]
   }

  ngOnInit(): void {
    this.servizioType = this.route.snapshot.data['servizioType'];
    if(this.servizioType=="veterinario") {
      this.servizio=this.veterinario
      this.searchItems()
      console.log(this.cards_servizio)
      
    } 
    else if(this.servizioType=="psicologo") {
      this.servizio=this.psicologo
      this.searchItems()
      console.log(this.cards_servizio)

    } 
    else if(this.servizioType=="dogsitter") {
      this.servizio=this.dogsitter
      this.searchItems()
      console.log(this.cards_servizio)
    } 
    else if(this.servizioType=="toelettatura") {
      this.servizio=this.toelettatura
      this.searchItems()
      console.log(this.cards_servizio)
    }
  }

  searchItems(): any {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    
    this.http.post<any>('http://localhost:4000/api/city',
    { }, httpOptions)
    .subscribe((res)=>{
      
      this.cards=res.data

      console.log(res)
    },error => {
      console.error(error);
    });
    
  }

}
/*
this.cards=[
      {
        p: ".",
        h1: "Bologna",
        button: "Scopri le sedi",
        img: "https://example.com/grass-fed-beef.jpg",
        alt: "bolo",
        href: "https://example.com/grass-fed-beef-page"
      },
      {
        p: ".",
        h1: "Napoli",
        button: "Scopri le sedi",
        img: "https://example.com/free-range-chicken.jpg",
        alt: "Picture of free-range chicken",
        href: "https://example.com/free-range-chicken-page"
      },
      {
        p: ".",
        h1: "Bologna",
        button: "Scopri le sedi",
        img: "https://example.com/grass-fed-beef.jpg",
        alt: "bolo",
        href: "https://example.com/grass-fed-beef-page"
      },
      {
        p: ".",
        h1: "Napoli",
        button: "Scopri le sedi",
        img: "https://example.com/free-range-chicken.jpg",
        alt: "Picture of free-range chicken",
        href: "https://example.com/free-range-chicken-page"
      },
      {
        p: ".",
        h1: "Bologna",
        button: "Scopri le sedi",
        img: "https://example.com/grass-fed-beef.jpg",
        alt: "bolo",
        href: "https://example.com/grass-fed-beef-page"
      },
      {
        p: ".",
        h1: "Napoli",
        button: "Scopri le sedi",
        img: "https://example.com/free-range-chicken.jpg",
        alt: "Picture of free-range chicken",
        href: "https://example.com/free-range-chicken-page"
      },
      {
        p: ".",
        h1: "Bologna",
        button: "Scopri le sedi",
        img: "https://example.com/grass-fed-beef.jpg",
        alt: "bolo",
        href: "https://example.com/grass-fed-beef-page"
      },
      {
        p: ".",
        h1: "Napoli",
        button: "Scopri le sedi",
        img: "https://example.com/free-range-chicken.jpg",
        alt: "Picture of free-range chicken",
        href: "https://example.com/free-range-chicken-page"
      },
     ]
*/