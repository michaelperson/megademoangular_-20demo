import { Component, OnInit } from '@angular/core';
import { FakePromiseService } from './services/fake-promise.service';

@Component({
  selector: 'app-demo12',
  templateUrl: './demo12.component.html'
})
export class Demo12Component implements OnInit {

  constructor(public fakePromise : FakePromiseService) {
  }

  ngOnInit(): void {
  }

  simple()
  {
    this.fakePromise.simple()
  }

  simple2()
  {
    this.fakePromise.simple2()
  }


  all()
  {
    this.fakePromise.all()
  }

  race()
  {
    this.fakePromise.race()
  }

}
