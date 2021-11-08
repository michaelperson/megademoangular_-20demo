import { AbstractControl } from '@angular/forms'


export function NameValidator(control : AbstractControl) : {[key : string] : string}
{
    if(control.value)
    {
        if(control.value == "test")
        return { "errorName" : "Je suis certain que vous ne vous appelez pas 'test'"}

        if(control.value.length <= 2)
            return { "errorName" : "Votre login dois contenir au moins 2 caractères"}

        return null
    }
}