import { Component, OnInit } from '@angular/core';
import { FakePromiseService } from './services/fake-promise.service';

@Component({
  selector: 'app-demo12',
  templateUrl: './demo12.component.html'
})
export class Demo12Component implements OnInit {

  simpleMessage : string = undefined
  simple2Message : string = undefined
  allMessage : string = undefined
  raceMessage : string = undefined


  constructor(private fakePromise : FakePromiseService) {
    this.simpleMessage = ""
    this.simple2Message = ""
    this.allMessage = ""
    this.raceMessage = ""
  }

  ngOnInit(): void {
  }

  simple() : void{
    this.fakePromise.simple()
    .then((value : string) => {
      console.log(value)
      this.simpleMessage = "Yeah je suis resolved simple"
    })
    .catch((value : string) => {
      console.log(value)
      this.simpleMessage = "ohhh je suis reject simple"
    })

  }

  simple2() : void{
    this.fakePromise.simple2()
    .then((value : string) => {
      console.log(value)
      this.simple2Message = "Yeah je suis resolved simple 2"
    })
    .catch((value : string) => {
      console.log(value)
      this.simple2Message = "ohhh je suis reject simple 2"
    })
  }

  all() : void{
    this.fakePromise.all()
    .then((value : string) => {
      console.log(value)
      this.allMessage = "Yeah je suis resolved all"
    })
    .catch((value : string) => {
      console.log(value)
      this.allMessage = "ohhh je suis reject all"
    })
  }

  race() : void{
    this.fakePromise.race()
    .then((value : string) => {
      console.log(value)
      this.raceMessage = "Yeah je suis resolved race"
    })
    .catch((value : string) => {
      console.log(value)
      this.raceMessage = "ohhh je suis reject race"
    })
  }
}
