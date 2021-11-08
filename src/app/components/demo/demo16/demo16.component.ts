import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailValidator } from './validators/email.validators';
import { NameValidator } from './validators/name.validators';
import { PasswordValidator } from './validators/password.validators';
import { TwoPasswordValidator } from './validators/twoPasswordValidate.validators';

@Component({
  selector: 'app-demo16',
  templateUrl: './demo16.component.html'
})
export class Demo16Component implements OnInit {

  myForm : FormGroup

  constructor(private fb : FormBuilder) { }

  ngOnInit(): void {
    this.generateForm()
  }

  generateForm()
  {
    this.myForm = this.fb.group(
      {
        name : ["", [NameValidator]],
        email : ["", [EmailValidator]],
        pass : ["", [PasswordValidator]],
        passValidate : ["", [PasswordValidator]]

      },
      {
        validators : TwoPasswordValidator
      }
    )
  }

  echoVisu()
  {
    console.log(this.myForm)
  }


  submitForm()
  {
    console.log(this.myForm)
  }
}
