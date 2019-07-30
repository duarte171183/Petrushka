import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from "../../services/auth.service";




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: any;
  password: any;
  username: any;

  constructor(private router: Router, public authService:AuthService ) { 
      
  }
  signInUser = {
    email: '',
    password: ''
  };


  ngOnInit() {

  }

  onSignInSubmit() : void {
    
    this.authService.logInUser(this.signInUser).subscribe(
      res => {
        if(res.status == 200){
          this.router.navigate(["dashboard"]);
        }
      },

      err => {
        alert("Invalid credentials");
      }
  )
  }
}
