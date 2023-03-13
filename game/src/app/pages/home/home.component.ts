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
      h1: "Services",
      p: "Find out the best treatment for your beloved pet!",
      button:"Click here",
      href:'services',
      
      img:'https://i.postimg.cc/d3wV95x0/cane-cappello.jpg',
      alt:'dog with hat'
    }
    this.info2={
      h1: "Products",
      p: "Take a look at out endless catalogue for all your needs!",
      button: "Click here",
      href:'products',
      
      img:'https://i.postimg.cc/MZDNszPD/gorilla.jpg',
      alt:'gorilla'
    }
    this.slides=[
      {
        h1: "Games",
        p: "Look at our great selection of interactive activities!",
        button: "Click here",
        img:'https://i.postimg.cc/XJNwrv7X/slide1.jpg',
        
        alt: "man holding lizard",
        href:'games',
      },
      {
        h1: "Curiosities",
        p: "Take a look at our deep archive of facts and curiosities",
        button: "Click here",
        img:'https://i.postimg.cc/QCJHL2T5/slide2.jpg',
        
        alt: "granny with cat",
        href:'curiosity',
      },
      
    ]
   }

  ngOnInit(): void {
  }

}
