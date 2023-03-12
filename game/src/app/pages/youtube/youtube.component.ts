import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.css']
})
export class YoutubeComponent implements OnInit {

  private API_KEY = 'AIzaSyB_u6Duylkenin6ui33KwqnwI-JbQa-18k';
  videos: any[] = [];
  searchTerm: string = '';

  constructor(private http: HttpClient) { }


  ngOnInit(): void { }

  searchVideos() {
    const url = `https://www.googleapis.com/youtube/v3/search?key=${this.API_KEY}&q=${this.searchTerm}&part=snippet&type=video&maxResults=10`;

    this.http.get(url).subscribe((response: any) => {
      this.videos = response.items;
      console.log(response);
    });
  }
}



