import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo8',
  templateUrl: './demo8.component.html'
})
export class Demo8Component implements OnInit {

  constructor() { }

  pTag : boolean = false
  inputTag : boolean = false
  mini : number = 10
  maxi : number = 50
  first : string = "Loïc"
  last : string = "Baudoux"

  color : string = "red"

  ngOnInit(): void {
  }

}
