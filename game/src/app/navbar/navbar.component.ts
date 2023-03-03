import { Component, NgModule, OnInit } from '@angular/core';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterLink } from '@angular/router';
import { AuthService } from '../auth.service';



@Component({
  selector: 'app-navbar',
  
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {

  constructor(public authService: AuthService) { }

  isMenuCollapsed=true

  toggleMenu():void {
    this.isMenuCollapsed=!this.isMenuCollapsed
  }

  ngOnInit(): void {
  }

}
