import { Component, OnInit } from '@angular/core';
import { HttpCountriesService } from './services/http-countries.service';

@Component({
  selector: 'app-demo18',
  templateUrl: './demo18.component.html'
})
export class Demo18Component implements OnInit {

  public listCountries : any[]
  public oneCountry : any

  constructor(private httpC : HttpCountriesService) { }

  ngOnInit(): void {
    this.httpC.getAllcountries().subscribe((value) => {
      console.log(value)
      this.listCountries = value
    })
  }


  detailsCountry(countryName : string)
  {
    this.httpC.getOneByName(countryName).subscribe((value) => {
      console.log(value)
      this.oneCountry = value[0]
    })
  }

}
