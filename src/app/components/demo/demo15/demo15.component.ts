import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-demo15',
  templateUrl: './demo15.component.html'
})
export class Demo15Component implements OnInit {

  public name : string = ""
  public email : string = ""
  public pass : string = ""
  public gender : string = ""

  /*reactive form */
  public myForm : FormGroup

  constructor(private fb : FormBuilder) { }

  ngOnInit(): void {
    this.generateForm()
  }


  generateForm()
  {
    this.myForm = this.fb.group(
      {
        name : ["", [Validators.required, Validators.minLength(2), Validators.maxLength(20)], [/* validation asynchrone */]],
        email : ["", [Validators.required, Validators.email], [/* validation asynchrone */]],
        pass : ["", [Validators.required, Validators.minLength(2), Validators.maxLength(20)], [/* validation asynchrone */]],
        gender : ["", [Validators.required], [/* validation asynchrone */]]
      },
      {
        /* validator : validateurs de groupe form */
      }
    )
  }


  submitForm()
  {
      console.log(this.myForm)
  }

  echoVisu()
  {
    console.log(this.myForm)
  }

}
