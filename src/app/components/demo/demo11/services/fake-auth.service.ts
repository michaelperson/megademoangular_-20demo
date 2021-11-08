import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FakeAuthService {

  public statusAuth : boolean
  public messageBvn : string
  public addMsg : string

  constructor()
  {
    this.statusAuth = false
    this.messageBvn = "Bonjour"
    this.addMsg = ""
  }

  logIn(name : string)
  {
    this.statusAuth = true
    this.addMsg = name
  }

  logOut(message : string)
  {
    this.statusAuth = false
    this.addMsg = message
  }
}
