import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string; // add this line
  loggato:boolean
  constructor(private authService: AuthService, private router: Router) {
    this.loggato=false
    this.password=''
    this.username=''
   }

  ngOnInit(): void {
  }

  login(username:string, password:string) {
    console.log(username, password)
    if(this.authService.login(username, password)){ 
      
      this.loggato=true
    }
  }

  logout() {
    this.authService.logout();
  }

}
