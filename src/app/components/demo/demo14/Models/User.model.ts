import { Address } from "./Address.model"

export class User
{
  public name : string
  public surname : string
  public age : number
  public techFav : string[]
  public address : Address = new Address


  constructor(name : string, surname : string, age : number, techFav : string[], address : Address) {
    this.name = name
    this.surname = surname
    this.age = age
    this.techFav = techFav
    this.address = address
  }
}