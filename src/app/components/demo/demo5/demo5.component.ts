import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo5',
  templateUrl: './demo5.component.html'
})
export class Demo5Component implements OnInit {

  maVar1 : string = "salut les gens !";
  maVar2 : number = 150;
  maVar3 : Date = new Date();

  
  constructor() { }

  ngOnInit(): void {
  }

}
