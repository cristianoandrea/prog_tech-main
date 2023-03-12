import { Component, OnInit, Input} from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-infocards',
  templateUrl: './infocards.component.html',
  styleUrls: ['./infocards.component.css']
})



export class InfocardsComponent implements OnInit {
  
  @Input() info: { p: string, h1: string, button: string, href:string, alt:string, img:string, href_img:string } | undefined;

  @Input() photoRight:boolean|undefined;
   
  
  constructor(private authservice:AuthService) { 
    
  }

  ngOnInit(): void {
  }

}
