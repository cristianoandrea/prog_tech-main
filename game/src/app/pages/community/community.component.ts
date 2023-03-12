import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.css']
})
export class CommunityComponent implements OnInit {

  username:string
  pets:any[]
  species: string;
  name: string;
  sex: string;
  age: number;
  description:string;
  medicalConditions: string;
  error:any=null


  constructor(private http: HttpClient, public authservice:AuthService) { 
    this.username=''
    this.age=0;
    this.medicalConditions='';
    this.species='';
    this.name='';
    this.sex='';
    this.description=''
    this.pets=[]

  }
  //fai per bene la chiamata
  ngOnInit(): void {
    //this.loading = true;
    this.http.post<any>('http://localhost:4000/api/note/', {})
      .subscribe(
        res => {
          console.log(res);
          this.pets=res.data
          console.log("pets:", this.pets)
        },
        err => {
          console.log(err);
          
        }
      );
  }

  onSubmit(username:string| null, species:string, name:string, sex:string, age:number, description:string, medicalConditions:string) {
    
    if(this.authservice.isLoggedIn) username=localStorage.getItem('utente')
    //per aggiungere vari animali al localstorage: li prendo
    let animals=localStorage.getItem('animali')
    //creo un nuovo array dove metterli
    let animali: string[] = [];
    if (animals !== null) {
      animali = JSON.parse(animals);
    }
    animali.push(species)
    console.log("animali", animali)
    let jsonAnimali=JSON.stringify(animali)
    localStorage.setItem('animali', jsonAnimali)

      //animali.forEach((animal: any) => console.log(animal));
    
    //let animali1 = ['dog', 'cat']
    //let ao = localStorage.getItem('animali')
    
    
    //console.log(ao)
    //localStorage.setItem('animali', 'dog')
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    let new_pet ={
      username:username, species:species, nameAnimal:name, sex:sex, age:age, medicalConditions:medicalConditions, descrizione: description
    }
    this.http.post<any>('http://localhost:4000/api/note/create', 
    {username:username, species:species, nameAnimal:name, sex:sex, age:age, medicalConditions:medicalConditions, descrizione: description }, httpOptions)
      .subscribe(response => {
        console.log(new_pet)
        console.log("successo! ",response)
      }, error => {
        this.error=error
        console.error(error);
      });
      this.pets.push(new_pet)
      
      
   console.log(username, species, name, sex, medicalConditions,age )
  }
}
