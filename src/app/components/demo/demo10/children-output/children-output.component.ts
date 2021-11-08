import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-children-output',
  templateUrl: './children-output.component.html'
})
export class ChildrenOutputComponent implements OnInit {

  @Output() enterChildren : EventEmitter<string> = new EventEmitter<string>()
  @Output() leaveChildren : EventEmitter<string> = new EventEmitter<string>()

  //je déclare que enterChildren sera un output utilisé dans le parent quyi sera un event emitter
  //je lui déclare donc une methode plus bas pour émettre lorsque l'event est déclancher
  // se sera réceptionner par le enterChildren du parent qui déclanchera lui une méthode pour s'en occuper
  //en gros on transfère la gestion de l'éevenement au parent qui, par des props ou des methode spécifique sera plus a meme de gérer l'event

  public messageEnfant1 : string
  public messageEnfant2 : string

  constructor() { }

  ngOnInit(): void {
    this.messageEnfant1 = "et je rentre dedans"
    this.messageEnfant2 = "et je sors de la !"
  }


  
  onEnter()
  {
    this.enterChildren.emit(this.messageEnfant1)
  }
  
  onLeave()
  {
    this.leaveChildren.emit(this.messageEnfant2)
  }

}
