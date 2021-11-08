import { Component, OnInit } from '@angular/core';
import { FakeAuthService } from './services/fake-auth.service';

@Component({
  selector: 'app-demo11',
  templateUrl: './demo11.component.html'
})
export class Demo11Component implements OnInit {

  public classLogin : string
  public classLogout : string
  

  constructor(public fakeAuth : FakeAuthService) { }

  ngOnInit(): void {
    this.classLogin = "btn btn-success"
    this.classLogout = "btn btn-danger"
   
  }


  login(name : string)
  {
    this.fakeAuth.logIn(name)
  }

  logout(message : string)
  {
    this.fakeAuth.logOut(message)
  }

}
