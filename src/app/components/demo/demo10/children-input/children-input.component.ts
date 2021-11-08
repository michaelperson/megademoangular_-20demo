import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-children-input',
  templateUrl: './children-input.component.html'
})
export class ChildrenInputComponent implements OnInit {

  @Input() colorChildren :string
  @Input() messageChildren : string



  constructor() { }

  ngOnInit(): void {
    
  }

}
