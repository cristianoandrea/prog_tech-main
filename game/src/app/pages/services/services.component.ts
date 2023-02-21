import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  public dogsitting: any
  public veterinarian:any

  constructor() { 
    this.dogsitting={
      h1: "Trova qui i migliori posti per mollare i tuoi problemi!",
      p: "Tante sedi e manco troppo male",
      button:"Daje"
    }
    this.veterinarian={
      h1: "Il tuo problema sta male? oh noooo guarda",
      p: "e come fai senza sto cosetto inutile che ti sporca casa",
      button:"Mannaggia... proviamo a fixare va"
    }
  }

  ngOnInit(): void {
  }

}
