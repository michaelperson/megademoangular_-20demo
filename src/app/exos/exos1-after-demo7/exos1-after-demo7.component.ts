import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exos1-after-demo7',
  templateUrl: './exos1-after-demo7.component.html'
})
export class Exos1AfterDemo7Component implements OnInit {

  product : string = ""
  qty : number = null
  cart : [[string, number]] = [[null, null]]
  // ou en version objet
  cartObj : [{
    name : string,
    qty : number
  }] = [{ name : null, qty : null}]

  constructor() { }

  ngOnInit(): void {
  }

  addToCart()
  {
       console.log(this.cart.length)
       if(this.cart[0][0] == null)
       {
        this.cart[0][0] = this.product
        this.cart[0][1] = this.qty
       }
       else
       {
         this.cart.push([this.product, this.qty])
       }


       let tmp = {
        name : this.product,
        qty : this.qty
      }

      if(this.cartObj[0].name == null)
      {
        this.cartObj[0] = tmp
      }
      else
      {
        this.cartObj.push(tmp)
      }

      console.log(this.cart)
      console.log(this.cartObj)
  }
}
