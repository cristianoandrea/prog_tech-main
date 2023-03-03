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
      p: "Scopri tutte le sedi messe a disposizione da Animal House",
      button:"Vai!",
      href: '/services/dogsitting',
      href_img:'https://postimg.cc/ns5s5pmt',
      img:'https://i.postimg.cc/T328RZZ0/dogsitter.jpg',
      alt:'dogsitter'
    }
    this.veterinarian={
      h1: "Veterinari",
      p: "Metti nelle solide mani dei nostri esperti i tuoi cuccioli",
      button:"Qui l'elenco",
      href: '/services/veterinarian',
      href_img:'https://postimg.cc/ns5s5pmt',
      img:'https://i.postimg.cc/NGPbyZ9b/veterinario.jpg',
      alt:'veterinario'
    },
    this.psicologo={
      h1: "Psicologo per animali",
      p: "Strizzacervelli per animalettucci",
      button:"Scopri ora",
      href: '/services/psicologo',
      href_img:'https://postimg.cc/ns5s5pmt',
      img:'https://i.postimg.cc/d3wV95x0/cane-cappello.jpg',
      alt:'cane con cappello'
    },
    this.toelettatura={
      h1: "Servizio di Toelettatura",
      p: "Metti nelle solide mani dei nostri esperti i tuoi cuccioli",
      button:"Qui l'elenco",
      href: '/services/toelettatura',
      href_img:'https://postimg.cc/ns5s5pmt',
      img:'https://i.postimg.cc/76R768s2/toelettatura.jpg',
      alt:'toelettatura'
    }
  }

  ngOnInit(): void {
  }

}
