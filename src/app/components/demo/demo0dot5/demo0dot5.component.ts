import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo0dot5',
  templateUrl: './demo0dot5.component.html'
})
export class Demo0dot5Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  test(ref)
  {
    alert(ref)
  }

}
