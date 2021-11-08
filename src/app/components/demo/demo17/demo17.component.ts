import { Component, OnInit } from '@angular/core';
import { SomethingService } from './services/something.service';

@Component({
  selector: 'app-demo17',
  templateUrl: './demo17.component.html'
})
export class Demo17Component implements OnInit {


  var1 : string = ""
  var2 : string = ""

  secondes : number = 0
  singleResp : number = 0
  singleRespPipe : number = 0
  fromResp : any

  constructor(private someService : SomethingService) { }

  ngOnInit(): void {

    

    this.someService.singleResp.subscribe((value) => {
      this.singleResp = value
    })

    this.someService.singleRespPipe.subscribe((value) => {
      this.singleRespPipe = value
    })


    this.someService.fromResp.subscribe((value) => {
      console.log(value)
      this.fromResp = value
    })

    this.someService.counter.subscribe((value) => {
      this.secondes = value
    })


    this.someService.var1$.pipe().subscribe(
      (value) => { this.var1 = value }
    )

    this.someService.var2$.pipe().subscribe(
      (value) => { this.var2 = value }
    )

    
  }


  fakeLogin()
  {
    this.someService.emitLogin()
  }


}
