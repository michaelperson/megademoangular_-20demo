import { AbstractControl, ValidationErrors } from "@angular/forms";

export function emailValidator(control : AbstractControl)
{
    let error : ValidationErrors

    if(control.value)
    {
        if(control.value.length <= 5)
        {
            error = { email : "Votre email ne peux pas contenir moins de 6 caractères"}
            return error
        }
        
        return null
    }
    else {
        error = { email : "Champ obligatoire"}
        return error
    }
}