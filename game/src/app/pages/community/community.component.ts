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
  medicalConditions: string;
  error:any=null


  constructor(private http: HttpClient, public authservice:AuthService) { 
    this.username=''
    this.age=0;
    this.medicalConditions='';
    this.species='';
    this.name='';
    this.sex='';
    this.pets=[]

  }

  ngOnInit(): void {
    //this.loading = true;
    this.http.post<any>('http://localhost:4000/api/note/', {})
      .subscribe(
        res => {
          console.log(res);
          this.pets=res
        },
        err => {
          console.log(err);
          
        }
      );
  }

  onSubmit(username:string, species:string, name:string, sex:string, age:number, medicalConditions:string) {
    
    if(this.authservice.isLoggedIn==true) username=this.authservice.active_user.name

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    this.http.post<any>('http://localhost:4000/api/note/', 
    {username, species, name, sex, age, medicalConditions }, httpOptions)
      .subscribe(response => {
        
        let new_pet ={
          user:username,specie:species, nome: name, sesso:sex, eta:age, medic:medicalConditions
        }
        this.pets.push(new_pet)
        console.log(new_pet)
        console.log("successo! ",response)
      }, error => {
        this.error=error
        console.error(error);
      });
      
      
   console.log(username, species, name, sex, medicalConditions,age )
  }
}
