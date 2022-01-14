import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-demo21',
  templateUrl: './demo21.component.html'
})
export class Demo21Component implements OnInit {

  myParams : string
  myQuery : string

  constructor(private router : Router, private activateRoute : ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.activateRoute)
    if(this.activateRoute.snapshot.params["id"])
    {
      this.myParams = this.activateRoute.snapshot.params["id"]
    }

    if(this.activateRoute.snapshot.queryParams["name"])
    {
      this.myQuery = this.activateRoute.snapshot.queryParams["name"]
    }
  }

  navigate()
  {
    this.router.navigate(["demo/demo1"])
  }

  navigateParams()
  {
    this.router.navigate(["demo/demo20/42"])
  }

  navigateQuery()
  {
    this.router.navigate(["demo/demo20"], { queryParams : {"name" : "loic"} })

  }

}
