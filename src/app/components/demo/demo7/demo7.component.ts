import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo7',
  templateUrl: './demo7.component.html'
})
export class Demo7Component implements OnInit {

  isOpen : boolean
  liste : string[];
  liste2 : {};

  constructor() { }

  ngOnInit(): void {
    this.isOpen = false
    this.liste = ["pomme", "poire", "bananes", "oranges"]
    this.liste2 = {"a" : "Pomme", "b" : "poire", "c" : "bananes", "d" : "oranges"}
  }

  OpenClose()
  {
    this.isOpen = !this.isOpen
  }

}
