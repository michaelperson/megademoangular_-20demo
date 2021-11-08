import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-demo20',
  templateUrl: './demo20.component.html'
})
export class Demo20Component implements OnInit {

  listCountries : any[]

  constructor(private route : ActivatedRoute) {
    this.listCountries = this.route.snapshot.data["datas"]
  }

  ngOnInit(): void {
  }

}
