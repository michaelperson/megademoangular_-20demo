import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo4dot5',
  templateUrl: './demo4dot5.component.html'
})

export class Demo4dot5Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  test(ref)
  {
    alert(ref)
  }
}
