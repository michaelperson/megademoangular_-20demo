import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo4',
  templateUrl: './demo4.component.html'
})
export class Demo4Component implements OnInit {

  nb1 : number = 0
  nb2 : number = 0

  constructor() { }

  ngOnInit(): void {
  }

  increaseNb1()
  {
    this.nb1 += 1
  }

  decreaseNb1()
  {
    this.nb1 -= 1
  }

  resetNb1()
  {
    this.nb1 = 0
  }

  increaseNb2()
  {
    this.nb2 += 1
  }

  decreaseNb2()
  {
    this.nb2 -= 1
  }

  resetNb2()
  {
    this.nb2 = 0
  }
}
