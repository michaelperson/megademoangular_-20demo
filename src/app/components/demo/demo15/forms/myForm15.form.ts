import { FormBuilder, FormGroup, Validators } from "@angular/forms";

export function generateMyForm(fb : FormBuilder) : FormGroup
{
    return fb.group({
        name : ["", [Validators.required, Validators.minLength(3), Validators.maxLength(20)], []],
        email : ["", [Validators.required, Validators.email], []],
        password : ["", [Validators.required, Validators.minLength(6), Validators.maxLength(15)], []],
        gender : ["", [Validators.required], []]
    }, {
    })
}