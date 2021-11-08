import { AbstractControl } from "@angular/forms";

export function PasswordValidator(control : AbstractControl) : {[key : string] : string}
{
    if(control.value)
    {
        if(control.value == "test1234") return {"errorPass" : "Mot de passe trop connu..."}

        if(control.value.length < 6) return {"errorPass" : "Mot de passe trop court"}
    }

    return null
}