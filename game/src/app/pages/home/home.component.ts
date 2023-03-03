import { Component, OnInit } from '@angular/core';
import { Slide } from 'src/app/carousel/carousel.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public info1:any
  public info2:any
  public slides: Slide[]

  constructor() {
    this.info1={
      h1: "Servizi in presenza",
      p: "Scopri tutti i servizi per prenderti cura al meglio del tuo cucciolo!",
      button:"Scopri ora",
      href:'/services',
      href_img:'https://postimg.cc/ns5s5pmt',
      img:'https://i.postimg.cc/d3wV95x0/cane-cappello.jpg',
      alt:'cane con cappello'
    }
    this.info2={
      h1: "Prodotti",
      p: "Visita il nostro elenco di prodotti per ogni tipo di esigenza!",
      button: "Scopri ora",
      href:'/products',
      href_img:'https://postimg.cc/ns5s5pmt',
      img:'https://i.postimg.cc/MZDNszPD/gorilla.jpg',
      alt:'gorilla maleducato'
    }
    this.slides=[
      {
        h1: "Giochi",
        p: "Scopri il nostro quiz o genera immagini di cuccioli",
        button: "Clicca qui",
        img:'https://i.postimg.cc/XJNwrv7X/slide1.jpg',
        href_img: 'https://postimg.cc/ns5s5pmt',
        alt: "uomo che tiene lucertola",
        href:'/games',
      },
      {
        h1: "Curiosità",
        p: "Visita il nostro archivio di curiosità sul mondo animale",
        button: "Clicca qui",
        img:'https://i.postimg.cc/QCJHL2T5/slide2.jpg',
        href_img: 'https://postimg.cc/ns5s5pmt',
        alt: "nonnina gatto",
        href:'/curiosity',
      },
      
    ]
   }

  ngOnInit(): void {
  }

}
