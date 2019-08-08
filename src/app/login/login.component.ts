import { Component, OnInit, Input, Output } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { LoginService } from '../login.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  outputmessage: string;
  constructor(private router: Router, private loginService: LoginService) {  }

  ngOnInit() {
    
  }
  
  

  validateLogin(user,password){
    let outjson = {'username':user,'password': password}
    this.loginService.validate(outjson)
      .subscribe(res => {
        if(res.success === 'true')this.router.navigate(['/dashboard']);}
        , err => this.outputmessage = "Invalid Login try again");
    }
    
  }

