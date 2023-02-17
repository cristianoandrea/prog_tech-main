import { Component, OnInit , Pipe, PipeTransform} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { KeyValue } from '@angular/common';



@Component({
  selector: 'app-curiosity',
  templateUrl: './curiosity.component.html',
  styleUrls: ['./curiosity.component.css']
})
export class CuriosityComponent  {

  //array in cui verranno piazzati gli anumali preferiti dell'utente
  my_animals: string[]
  //variabile utile per le ricerche
  name = '';
  //array che contiene l'array con tutti i fatti sugli animali
  animalInfo:any;
  public isCollapsed : boolean;

  constructor(private http: HttpClient) {
    this.isCollapsed = false;
    this.my_animals=['dog', 'cat']
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

/*
<li> <strong>Prey:</strong> {{animal.characteristics.prey}}</li>
                    <li> <strong>Name of young:</strong> {{animal.characteristics.name_of_young}}</li>
                    <li> <strong>Group Behavior:</strong> {{animal.characteristics.group_behavior}}</li>
                    <li><strong>Estimated Population Size:</strong>  {{animal.characteristics.estimated_population_size}}</li>
                    <li><strong>Biggest Threat: </strong>{{animal.characteristics.biggest_threat}}</li>
                    <li><strong>Most Distinctive Feature:</strong> {{animal.characteristics.most_distinctive_feature}}</li>


                    <li> <strong>Kingdom:</strong> {{animal.taxonomy.kingdom}}</li>
                    <li> <strong>Phylum:</strong> {{animal.taxonomy.phylum}}</li>
                    <li> <strong>Class:</strong> {{animal.taxonomy.class}}</li>
                    <li><strong>Order:</strong>  {{animal.taxonomy.order}}</li>
                    <li><strong>Family: </strong>{{animal.taxonomy.family}}</li>
                    <li><strong>Genus:</strong> {{animal.taxonomy.genus}}</li>
                    <li><strong>Scientific name:</strong> {{animal.taxonomy.scientific_name}}</li>
*/