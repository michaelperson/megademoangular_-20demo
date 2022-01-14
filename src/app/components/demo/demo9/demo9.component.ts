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

    //ngStyle
    persons : any[] = [
      { name : "Jean charles edouard 1", country : "UK", lang : "Swedish" },
      { name : "Jean charles edouard 2", country : "USA", lang : "Swedish" },
      { name : "Jean charles edouard 3", country : "BE", lang : "Swedish" },
      { name : "Jean charles edouard 4", country : "USA", lang : "Swedish" }
  
    ]


  constructor() { }

  ngOnInit(): void {
  }

  getColor(country)
  {
    switch (country)
    {
      case 'UK':
        return 'green'
      case 'USA':
        return 'blue'
      case 'BE':
        return 'red'
    }
  }

  getClass(country)
  {
    switch (country)
    {
      case 'UK':
        return 'alert alert-warning'
      case 'USA':
        return 'alert alert-danger'
      case 'HK':
        return 'alert alert-info'
      default:
          return "alert alert-success"
    }
  }

}
