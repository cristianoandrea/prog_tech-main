import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  public dogsitting: any
  public veterinarian:any
  public psicologo:any
  public toelettatura:any

  constructor() { 
    this.dogsitting={
      h1: "Dogsitting",
      p: "Leave your pets in the hands odf our specialists",
      button:"Find out!",
      href: '/services/dogsitting',
      href_img:'https://postimg.cc/ns5s5pmt',
      img:'https://i.postimg.cc/T328RZZ0/dogsitter.jpg',
      alt:'dogsitter'
    }
    this.veterinarian={
      h1: "Veterinarian",
      p: "Get the best medical treatment for you pet",
      button:"Find out!",
      href: '/services/veterinarian',
      href_img:'https://postimg.cc/ns5s5pmt',
      img:'https://i.postimg.cc/NGPbyZ9b/veterinario.jpg',
      alt:'veterinarian'
    },
    this.psicologo={
      h1: "Psychologist",
      p: "A shrink for pets? Never heard anything more useful!",
      button:"Find out NOW!",
      href: '/services/psychologist',
      href_img:'https://postimg.cc/ns5s5pmt',
      img:'https://i.postimg.cc/d3wV95x0/cane-cappello.jpg',
      alt:'dog with hat'
    },
    this.toelettatura={
      h1: "Grooming",
      p: "Treat your pet like a king",
      button:"Find out!",
      href: '/services/grooming',
      href_img:'https://postimg.cc/ns5s5pmt',
      img:'https://i.postimg.cc/76R768s2/toelettatura.jpg',
      alt:'grooming'
    }
  }

  ngOnInit(): void {
  }

}
