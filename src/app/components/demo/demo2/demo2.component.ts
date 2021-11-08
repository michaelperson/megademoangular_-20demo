import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo2',
  templateUrl: './demo2.component.html'
})
export class Demo2Component implements OnInit {

  maVar1 : string
  maVar2 : number 
  maVar3 : boolean


  constructor() { }

  ngOnInit(): void {
  }

}
