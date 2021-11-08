import { AbstractControl } from "@angular/forms";

export function TwoPasswordValidator(controls : AbstractControl) : {[key : string] : string}
{
    if(controls.value.pass == controls.value.passValidate)
        return null
    else
        return {"errorTwoPass" : "Mot de passe non similaire..."}
}