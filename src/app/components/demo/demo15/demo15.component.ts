import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { generateMyForm } from './forms/myForm15.form';

@Component({
  selector: 'app-demo15',
  templateUrl: './demo15.component.html'
})
export class Demo15Component implements OnInit {

  name : string = undefined
  email : string = undefined
  password : string = undefined
  gender : string = undefined

  myForm : FormGroup

  constructor(private fb : FormBuilder) {
  }

  ngOnInit(): void {
    this.myForm = generateMyForm(this.fb)

  }

  sendTwb()
  {
    console.log(this.name)
    console.log(this.email)
    console.log(this.password)
    console.log(this.gender)
  }

  sendRf()
  {
    console.log(this.myForm.valid)
    console.log(this.myForm.controls.name.valid)
  }


}
