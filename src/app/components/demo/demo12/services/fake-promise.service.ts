import { Injectable } from '@angular/core';
import { promise } from 'selenium-webdriver';

@Injectable({
  providedIn: 'root'
})
export class FakePromiseService {
  
  constructor() {
  }

  simple() : Promise<string>{

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("resolved")
      }, 1500)
    })
  }

  simple2() : Promise<unknown>{

    let myPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Resolved")
      }, 1500)
    })

    return myPromise
    
  }

  all() : Promise<any>{

    let myPromise1 = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Resolved 1")
      }, 500)
    })

    let myPromise2 = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Resolved 2")
      }, 1500)
    })

    let myPromise3 = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Resolved 3")
      }, 4000)
    })

    return Promise.all([myPromise1, myPromise2, myPromise3])


  }

  race() : Promise<any>{

    let myPromise1 = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Resolved 1")
      }, 1500)
    })

    let myPromise2 = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Resolved 2")
      }, 500)
    })

    let myPromise3 = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Resolved 3")
      }, 1500)
    })

    return Promise.race([myPromise1, myPromise2, myPromise3])
  }

}
