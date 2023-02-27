import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-infocards',
  templateUrl: './infocards.component.html',
  styleUrls: ['./infocards.component.css']
})



export class InfocardsComponent implements OnInit {
  
  @Input() info: { p: string, h1: string, button: string } | undefined;

  @Input() photoRight:boolean|undefined;
   
  
  constructor() { 
    
  }

  ngOnInit(): void {
  }

}