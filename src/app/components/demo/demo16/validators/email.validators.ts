import { AbstractControl } from '@angular/forms'


export function EmailValidator(control : AbstractControl) : {[key : string] : string}
{
    if(control.value)
    {
        if(control.value == "t@t.b")
        return { "errorEmail" : "Je suis certain que cette email n'existe pas..."}

        if(control.value.length <= 6)
            return { "errorEmail" : "Votre email dois contenir au moins 6 caractères"}

        return null
    }
    


    return null
}