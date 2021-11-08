import { Component, OnInit } from '@angular/core';
import { Address } from './Models/Address.model';
import { User } from './Models/User.model';

@Component({
  selector: 'app-demo14',
  templateUrl: './demo14.component.html'
})
export class Demo14Component implements OnInit {
  
  user1 : User

  constructor() {

    let userAddress = new Address() 
    userAddress.locality = "Mars"
    userAddress.street = " c'est lui la street"
    userAddress.number = "1"
    userAddress.zipCode = "666"
    userAddress.pays = "mer de la douleur"

    this.user1 = new User("Dark", "Vador", 198, ["c#", "c", "c++", "discord"], userAddress)

  }

  ngOnInit(): void {
  }

}
