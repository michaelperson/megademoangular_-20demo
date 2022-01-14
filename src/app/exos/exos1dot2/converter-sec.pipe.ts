import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'converterSec'
})
export class ConverterSecPipe implements PipeTransform {

  transform(value: number): string {

    if(value == undefined) return ""

    let jours = Math.floor(value / 86400)
    value = value - (jours * 86400)

    let heures = Math.floor(value / 3600)
    value = value - (heures * 3600)  
    
    let minutes = Math.floor(value / 60)
    value = value - (minutes * 60)

    let secondes = value

    let joursSTR = "Jour"
    let heuresSTR = "Heure"
    let minutesSTR = "Minute"
    let secondesSTR = "Seconde"

    if(jours > 1) joursSTR = joursSTR + "s"
    if(heures > 1) heuresSTR = heuresSTR + "s"
    if(minutes > 1) minutesSTR = minutesSTR + "s"
    if(secondes > 1) secondesSTR = secondesSTR + "s"

    let heuresDone = heures.toString()
    let minutesDone = minutes.toString()
    let secondesDone = secondes.toString()

    if(heures < 10) { heuresDone = "0" + heures.toString() }
    if(minutes < 10) { minutesDone = "0" + minutes.toString() }
    if(secondes < 10) { secondesDone = "0" + secondes.toString() }

    
    
    return `${jours} ${joursSTR} ${heuresDone} ${heuresSTR} ${minutesDone} ${minutesSTR} ${secondesDone} ${secondesSTR}`;
  }

}
