import { AbstractControl, ValidationErrors } from "@angular/forms";

export function nameValidator(control : AbstractControl)
{
    let error : ValidationErrors

    if(control.value)
    {
        if(control.value == "test")
        {
            error = { name : "Je suis certain que votre nom n'est pas 'test'" }
            return error 
        }

        if(control.value.length <= 2)
        {
            error = { name : "Votre nom ne peux pas contenir moins de 3 caractères"}
            return error
        }
        
        return null
    }
    else {
        error = { name : "Champ obligatoire"}
        return error
    }
}