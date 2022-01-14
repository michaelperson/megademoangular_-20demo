import { FormBuilder, FormGroup } from "@angular/forms";
import { emailValidator } from "../validators/email.validators";
import { nameValidator } from "../validators/name.validators";
import { TwoPasswordCheckValidator } from "../validators/twoPasswordValidate.validators";

export function generateMyForm(fb : FormBuilder) : FormGroup
{
    return fb.group({
        name : ["", [nameValidator], []],
        email : ["", [emailValidator], []],
        password : ["", [], []],
        passwordVerify : ["", [], []]
    }, {
        validators : TwoPasswordCheckValidator
    })
}