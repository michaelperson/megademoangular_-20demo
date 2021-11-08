import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo10',
  templateUrl: './demo10.component.html'
})
export class Demo10Component implements OnInit {

  
  public colorParent: string
  public messageParent : string
  
  public messageByEnfant : string
  
  constructor() {
    this.colorParent = 'alert-success'
    this.messageParent = "en vrai je suis peux être dans un compo enfant mais je suis déclarer dans demo10"
  }

  ngOnInit(): void {
  }

  changeColor() {
		if (this.colorParent == 'alert-success')
			this.colorParent = 'alert-danger'

		else 
			this.colorParent = 'alert-success';
	}

/* output de l'enfant traduit dans le parent */
  onParent(message : string)
  {
    this.messageByEnfant = message
  }

}
