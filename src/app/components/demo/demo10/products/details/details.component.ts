import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html'
})
export class DetailsComponent implements OnInit, OnChanges {

  @Output() deleteData : EventEmitter<string> = new EventEmitter<string>()
  @Output() updatePrice : EventEmitter<object> = new EventEmitter<object>()
  
  @Input() productName = ''
  @Input() productPrice = ''
  @Input() productId = ''

  newPrice : string = ''

  constructor() { 
  }

  ngOnChanges() : void{
    this.newPrice = this.productPrice
  }
  

  ngOnInit(): void {
  }

  onClickDelete(id : string)
  {
    this.deleteData.emit(id)
  }


  onUpdatePrice()
  {
    console.log(this.newPrice)
    this.updatePrice.emit({id : this.productId, newPrice : this.newPrice})
  }

}
