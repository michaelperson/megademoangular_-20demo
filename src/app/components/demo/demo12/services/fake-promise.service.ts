import { Injectable } from '@angular/core';
import { promise } from 'selenium-webdriver';

@Injectable({
  providedIn: 'root'
})
export class FakePromiseService {
  
  public messageSimple : string = ""
  public messageSimple2 : string = ""
  public messageAll : string = ""
  public messageAllSettled : string = ""
  public messageRace : string = ""
  public messageAny : string = ""


  constructor() { }

  simple()
  {
    new Promise((resolve, reject) => {
      setTimeout(() => {

        resolve('Yeah je suis resolved !')
      }, 1500)

      setTimeout(() => {
        reject('Yeah je suis reject... !')
      }, 4000)
    })
    .then((value : string) => {
      this.messageSimple = value
    })
    .catch((error : string) => {
      this.messageSimple = error
    })
  }

  simple2()
  {
    const promise1 = new Promise((resolve, reject) => {
      setTimeout(() => {

        resolve('Yeah je suis resolved !')
      }, 1500)

      setTimeout(() => {
        reject('Yeah je suis reject... !')
      }, 4000)
    })
    
    promise1.then((value : string) => {
      this.messageSimple2 = value
    })

    promise1.catch((error : string) => {
      this.messageSimple2 = error
    })
    
  }


  all()
  {
    const promiseAll1 = new Promise((resolve, reject) => {
      setTimeout(() => {

        resolve('Yeah je suis resolved !')
      }, 1500)

      setTimeout(() => {
        reject('Yeah je suis reject... !')
      }, 4000)
    })

    const promiseAll2 = new Promise((resolve, reject) => {
      setTimeout(() => {

        resolve('Yeah je suis resolved !')
      }, 1500)

      setTimeout(() => {
        reject('Yeah je suis reject... !')
      }, 4000)
    })

    const promiseAll3 = new Promise((resolve, reject) => {
      setTimeout(() => {

        resolve('Yeah je suis resolved !')
      }, 1500)

      setTimeout(() => {
        reject('Yeah je suis reject... !')
      }, 4000)
    })
    
    Promise.all([promiseAll1, promiseAll2, promiseAll3])
    .then((value) => {
      this.messageAll = "Yeah je suis resolved Promise all"
    })
    .catch((err) => {
      this.messageAll = "Yeah je suis reject Promise all"
    })
  }

  race()
  {
    const promiseRace1 = new Promise((resolve, reject) => {
      setTimeout(() => {

        resolve('Yeah je suis resolved !')
      }, 1500)

      setTimeout(() => {
        reject('Yeah je suis reject... !')
      }, 4000)
    })

    const promiseRace2 = new Promise((resolve, reject) => {
      setTimeout(() => {

        resolve('Yeah je suis resolved !')
      }, 1500)

      setTimeout(() => {
        reject('Yeah je suis reject... !')
      }, 4000)
    })

    const promiseRace3 = new Promise((resolve, reject) => {
      setTimeout(() => {

        resolve('Yeah je suis resolved !')
      }, 1500)

      setTimeout(() => {
        reject('Yeah je suis reject... !')
      }, 4000)
    })
    
    Promise.race([promiseRace1, promiseRace2, promiseRace3])
    .then((value) => {
      this.messageRace = "Yeah je suis resolved Promise race"
    })
    .catch((err) => {
      this.messageRace = "Yeah je suis reject Promise race"
    })
  }

}
