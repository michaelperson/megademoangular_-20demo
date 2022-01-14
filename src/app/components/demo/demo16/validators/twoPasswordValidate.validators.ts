import { AbstractControl, ValidationErrors } from "@angular/forms";

export function TwoPasswordCheckValidator(controlGroup : AbstractControl)
{
    let errors : ValidationErrors

    if(controlGroup.value.password && controlGroup.value.passwordVerify)
    {
        if(controlGroup.value.password == controlGroup.value.passwordVerify)
        {
            return null
        }
        else{
            errors = { twoPasswordCheck : "Vos deux mots de passe ne corresponde pas"}
            return errors
        }
    }
    else{
        errors = { twoPasswordCheck : "Champ obligatoire"}
    }
    
}