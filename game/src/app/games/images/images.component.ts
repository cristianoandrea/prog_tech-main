import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {

  public url:string

  constructor(private http: HttpClient) {
    this.url=''
  }

  ngOnInit(): void {
  }

  public fetchDogs(): void {
    this.http.get<{ message: string }>('https://dog.ceo/api/breeds/image/random')
      .subscribe((response) => {
        this.url = response.message;
      });
  }

  public fetchCats(): void {
    this.http.get('https://cataas.com/cat', { responseType: 'blob' })
      .subscribe((response) => {
        const reader = new FileReader();
        reader.readAsDataURL(response);
        reader.onloadend = () => {
          this.url = reader.result as string;
        };
      });
  }

  public fetchDuck(): void {
    const headers = new HttpHeaders().set('Access-Control-Allow-Origin', '*');
    this.http.get<{ message: any, url:any }>("https://random-d.uk/api/v2/random", {headers})
      .subscribe((response) => {
        let tmp = response;
        console.log(tmp.url)
        this.url=tmp.url
      });
  }



}
