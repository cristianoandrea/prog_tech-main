import { HttpClient } from '@angular/common/http';
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
    p: "qui di seguito trovi tutte le sedi in cui operiamo. Più di 80 sedi sparse in tutta italia. Prenota ora!",
    api_call: ""
  };

  veterinario = {
    titolo: "Veterinario",
    p: "Una vasta selezione di sedi in città d'arte italiane tra cui scegliere per curare al meglio il tuo cucciolo",
    api_call: ""
  };

  toelettatura = {
    titolo: "Toelettatura",
    p: "Bleah! Cosa era? Un secchio dell'immondizia o forse il tuo amato amico a n (n={2,3,4,5,6....,1000} zampe? Il mejo servizio di toelettatura in italia!",
    api_call: ""
  };

  psicologo = {
    titolo: "Psicologo per animali",
    p: "il tuo cucciolo è depresso? Soffre e non sai perché? Lascia che i nostri specialisti se ne prendano cura!",
    api_call: ""
  };

  public cards: Card[]
  public cards_servizio: Card[]

  constructor(private route: ActivatedRoute, private http: HttpClient) {
     this.servizioType=''
     this.cards_servizio=[]
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
   }

  ngOnInit(): void {
    this.servizioType = this.route.snapshot.data['servizioType'];
    if(this.servizioType=="veterinario") {
      this.servizio=this.veterinario
      //fai chiamata in ciascuno di questi
      //fetch a '/localhost:4000/api/city'
      //post a city/
    } 
    else if(this.servizioType=="psicologo") {
      this.servizio=this.psicologo
      this.cards_servizio=this.searchItems()
      console.log(this.cards_servizio)

    } 
    else if(this.servizioType=="dogsitter") {
      this.servizio=this.dogsitter
      this.cards_servizio=this.searchItems()
      console.log(this.cards_servizio)
    } 
    else if(this.servizioType=="toelettatura") {
      this.servizio=this.toelettatura
      this.cards_servizio=this.searchItems()
      console.log(this.cards_servizio)
    }
  }

  searchItems(): any {
    const url = 'http://localhost:4000/api/city';
    const data = { };
    return this.http.post<any>(url, data);
  }

}
