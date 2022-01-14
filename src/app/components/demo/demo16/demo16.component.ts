import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { generateMyForm } from './forms/myForm16.form';

@Component({
  selector: 'app-demo16',
  templateUrl: './demo16.component.html'
})
export class Demo16Component implements OnInit {

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

  validateName()
  {
    if(this.myForm.controls.name.value != "")
    {
      if(this.myForm.controls.name.invalid)
      {
        return "is-invalid"
      }
      return "is-valid"
    }
  }

  validateEmail()
  {
    if(this.myForm.controls.email.value != "")
    {
      if(this.myForm.controls.email.invalid)
      {
        return "is-invalid"
      }
      return "is-valid"
    }
  }

  validatePassword()
  {
    if(this.myForm.controls.password.value != "")
    {
      if(this.myForm.controls.password.invalid)
      {
        return "is-invalid"
      }
      return "is-valid"
    }
  }

  validatePasswordVerify()
  {
    if(this.myForm.controls.passwordVerify.value != "")
    {
      if(this.myForm.errors)
      {
        if(this.myForm.errors.twoPasswordCheck)
        {
          return "is-invalid"
        }
      }
      return "is-valid"
      
    }
  }

}
