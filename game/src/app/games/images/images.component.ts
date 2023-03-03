import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


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
    this.http.get('http://placekitten.com/200/300', { responseType: 'blob' })
      .subscribe((response) => {
        const reader = new FileReader();
        reader.readAsDataURL(response);
        reader.onloadend = () => {
          this.url = reader.result as string;
        };
      });
  }

  public fetchBunny(): void {
    this.http.get<{ message: string }>("https://api.bunnies.io/v2/loop/random/?media=gif,png")
      .subscribe((response) => {
        this.url = response.message;
      });
  }

  public fetchDuck(): void {
    this.http.get<{ message: string }>("https://random-d.uk/api/v1/random?type=png")
      .subscribe((response) => {
        this.url = response.message;
      });
  }

  public fetchFox(): void {
    this.http.get<{ message: string }>("https://randomfox.ca/floof/")
      .subscribe((response) => {
        this.url = response.message;
      });
  }

  public fetchLizard(): void {
    this.http.get<{ message: string }>("https://nekos.life/api/v2/img/lizard")
      .subscribe((response) => {
        this.url = response.message;
      });
  }

  public fetchShiba(): void {
    this.http.get<{ message: string }>("http://shibe.online/api/shibes")
      .subscribe((response) => {
        this.url = response.message;
      });
  }

  public fetchKoala(): void {
    this.http.get<{ message: string }>("https://some-random-api.ml/img/koala")
      .subscribe((response) => {
        this.url = response.message;
      });
  }

  public fetchPanda(): void {
    this.http.get<{ message: string }>("https://some-random-api.ml/img/panda")
      .subscribe((response) => {
        this.url = response.message;
      });
  }

  public fetchBird(): void {
    this.http.get<{ message: string }>("https://some-random-api.ml/img/birb")
      .subscribe((response) => {
        this.url = response.message;
      });
  }

  

  

}
