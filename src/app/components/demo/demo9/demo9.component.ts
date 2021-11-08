import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo9',
  templateUrl: './demo9.component.html'
})
export class Demo9Component implements OnInit {

  public classP = "alert alert-primary"
  public person = {
    name : "Jean charles edouard",
    country : "UK",
    lang : "Swedish meal time"
  }


  constructor() { }

  ngOnInit(): void {
  }

  getColor(country)
  {
    switch (country)
    {
      case 'UK':
        return 'green';
      case 'USA':
        return 'blue';
      case 'HK':
        return 'red';
    }
  }

  getClass(country)
  {
    switch (country)
    {
      case 'UK':
        return 'alert alert-warning';
      case 'USA':
        return 'alert alert-danger';
      case 'HK':
        return 'alert alert-info';
    }
  }

}
