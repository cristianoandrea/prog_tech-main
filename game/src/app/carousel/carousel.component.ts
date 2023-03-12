import { Component, OnInit, Input} from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { NgIf } from '@angular/common';

export interface Slide {
  p: string;
  h1: string;
  button: string;
  img: string;
  href: string;
  alt: string;
  
}


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  
  
  @Input() slides: Slide[] | undefined;

  constructor() { 
    
  }

  ngOnInit(): void {
  }

}
