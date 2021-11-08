import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html'
})
export class ProductsComponent implements OnInit {

  constructor() { }

  listProduct = [
    { id : "1", name : "prod 1", price : "15"},
    { id : "2", name : "prod 2", price : "22"},
    { id : "3", name : "prod 3", price : "27"},
    { id : "4", name : "prod 4", price : "30"},
    { id : "5", name : "prod 5", price : "40"},
  ]

  ngOnInit(): void {
  }

  deleteDataParent(id : string){
    this.listProduct = this.listProduct.filter(x => x.id != id)
  }

  updatePriceParent(product : any)
  {
    console.log(product)
    this.listProduct.forEach((prod) => {
      if(prod.id == product.id)
        prod.price = product.newPrice
    })

    console.log(this.listProduct)
  }

}
