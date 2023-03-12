import { Component, OnInit , Pipe, PipeTransform} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { KeyValue } from '@angular/common';
import { AuthService } from '../auth.service';



@Component({
  selector: 'app-curiosity',
  templateUrl: './curiosity.component.html',
  styleUrls: ['./curiosity.component.css']
})
export class CuriosityComponent  {

  //array in cui verranno piazzati gli anumali preferiti dell'utente
  public myAnimals: []| null
  //variabile utile per le ricerche
  name = '';
  //array che contiene l'array con tutti i fatti sugli animali
  animalInfo:any;
  public isCollapsed : boolean;
  constructor(private http: HttpClient, private authService: AuthService) {
    this.isCollapsed = false;
    let animalucci = localStorage.getItem('animali')
    if (animalucci) {
      this.myAnimals=JSON.parse(animalucci)
      console.log(this.myAnimals)
    } else this.myAnimals=[]
  }

  search(animal:string) {
    const headers = new HttpHeaders({
      'X-Api-Key': '3skSTXwWGlxmOPAiEX7DLA==5sp1UW4nSDvHbDR7'
    });
    this.name=animal
    this.http.get(`https://api.api-ninjas.com/v1/animals?name=${this.name}`, { headers })
      .subscribe((data) => {
        this.animalInfo = data;
        console.log(data)
      });
  }

  transform(value: any): string {
    let key = value.replace(/[^a-zA-Z0-9]/g, ' ');
    key = key.replace(/\w\S*/g,  (txt: string)=> {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
    return `${key}`;
  }

}

