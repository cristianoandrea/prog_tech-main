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
  password: string; 
  loggato:boolean
  error:boolean
  constructor(private authService: AuthService, private router: Router) {
    this.loggato=false
    this.password=''
    this.username=''
    this.error=false
   }

  ngOnInit(): void {
    if (this.authService.getValue() ==true) {
      this.router.navigate(['/'])
    }
  }

  login(username:string, password:string) {
    console.log(username, password)
    if(this.authService.login(username, password)){ 
      
      this.loggato=true
    } else this.error=true
  }

  logout() {
    this.authService.logout();
  }

}
