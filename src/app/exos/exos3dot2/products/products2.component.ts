import { Component, OnInit } from '@angular/core';
import { product } from '../models/product.model';
import { GestProductsService } from '../services/gest-products.service';

@Component({
  selector: 'app-products2',
  templateUrl: './products2.component.html'
})
export class Products2Component implements OnInit {

  listProd : product[] = []
  newPrice : number = undefined
  newName : string = undefined

  constructor(private gestProd : GestProductsService) {
    this.listProd = this.gestProd.listProd
  }

  ngOnInit(): void {
  }

  onClickDelete(id : number) : void{
    this.listProd = this.gestProd.deleteProduct(id)
  }

  onClickUpdate(id : number, newPrice : number) : void{
    this.listProd = this.gestProd.updateProduct({ id : id, newPrice : newPrice})
  }

  addTwb()
  {
    let newProduct = new product()
    newProduct.name = this.newName
    newProduct.price = this.newPrice

    console.log(newProduct)

    //appel service
    this.listProd = this.gestProd.addProduct(newProduct)
  }

  addRef(newName: string, newPrice : number)
  {
    let newProduct = new product()
    newProduct.name = newName
    newProduct.price = newPrice

    //appel service
    this.listProd = this.gestProd.addProduct(newProduct)

  }


}
