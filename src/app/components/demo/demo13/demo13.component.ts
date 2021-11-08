import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-demo13',
  templateUrl: './demo13.component.html'
})
export class Demo13Component implements OnInit {

  statusAuth : boolean
  constructor(private loginService : LoginService) { }

  ngOnInit(): void {
    this.statusAuth = this.loginService.statusAuth
  }

  
  login()
  {
    this.loginService.logIn()
    this.statusAuth = this.loginService.statusAuth
  }

  logout()
  {
    this.loginService.logOut()
    this.statusAuth = this.loginService.statusAuth
  }


}
