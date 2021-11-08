import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, interval, of, from } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SomethingService {
  //api doc de rxjs https://rxjs.dev/api
  singleResp : any
  singleRespPipe : any

  fromResp : any
  
  counter : any
  
  var1 : string = "Distribué dès le début !"
	var2 : string = "ici non :) il faut envoyer l'emit une première fois sois meme"

	var1$ : Subject<string> = new Subject<string>()
	var2$ : BehaviorSubject<string> = new BehaviorSubject<string>(this.var1)


  constructor() {

    this.singleResp = of(42)

    this.singleRespPipe = of(42).pipe(map(x => x*2))

    let data = ["tutu", "toto", "tata"]
    this.fromResp = from(data)

    this.counter = interval(1000)
  }

  emitVar2_BS()
  {
    this.var2 = "Variable OBS de type Subject"
    this.var2$.next(this.var2)
  }

  emitVar1_S()
  {
    this.var1 = "Variable OBS de type BehaviorSubject"
    this.var1$.next(this.var1)
  }

  emitLogin()
  {
    this.emitVar1_S()
    this.emitVar2_BS()
  }
}
