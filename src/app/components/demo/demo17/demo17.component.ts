import { Component, OnInit } from '@angular/core';
import { FakeLogin17Service } from './services/fake-login17.service';

@Component({
  selector: 'app-demo17',
  templateUrl: './demo17.component.html'
})
export class Demo17Component implements OnInit {

  isConnect : boolean = undefined
  simpleOfResponse : number
  simpleFromResponse : string
  simpleIntervalResponse : number

  myString1 : string = undefined
  myString2 : string = undefined

  constructor(private loginServ : FakeLogin17Service) {
    this.isConnect = this.loginServ.isConnect
  }

  ngOnInit(): void {
    this.loginServ.simpleOf$.subscribe((value) => {
      this.simpleOfResponse = value
    })

    this.loginServ.simpleFrom$.subscribe((value) => {
      console.log(value)
      this.simpleFromResponse = value
    })

    this.loginServ.simpleInterval$.subscribe((value) => {
      this.simpleIntervalResponse = value
    })


    this.loginServ.mySubject$.subscribe((value) => {
      console.log(value)
      this.isConnect = value
    })


    this.loginServ.myVar1$.subscribe((value) => {
      this.myString1 = value
    })

    this.loginServ.myVar2$.subscribe((value) => {
      this.myString2 = value
    })


  }

  ngOnDestroy()
  {
    this.loginServ.mySubject$.unsubscribe()
    this.loginServ.myVar1$.unsubscribe()
    this.loginServ.myVar2$.unsubscribe()
    console.log("destroy")
  }

  login()
  {
    this.loginServ.login()
  }

  logout()
  {
    this.loginServ.logout()
  }

  emitOf(nb : number)
  {
    this.loginServ.reEmitOf(nb)

    this.loginServ.simpleOf$.subscribe((value) => {
      this.simpleOfResponse = value
    })

  }


  emitSub()
  {
    this.loginServ.emitMyString()
  }

 

}
