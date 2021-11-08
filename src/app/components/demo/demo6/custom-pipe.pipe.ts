import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipe'
})
export class CustomPipePipe implements PipeTransform {

  transform(value: number): unknown {

    let heures = Math.floor(value/3600);
    let jours = Math.floor(heures/24);
    heures = heures - (jours * 24)
    value = value - (heures * 3600)
    
    let seconds = value % 60;
    let minutes = Math.floor(value/60);
    

    //partie stringify
    let joursST = jours.toString();
    let strForSJour = "Jour"
    if(jours > 1) strForSJour = "Jours"

    let heuresST =  heures.toString();
    if(heures < 10) heuresST = '0' + heuresST
    let strForSHeure = "Heure"
    if(heures > 1) strForSHeure = "Heures"

    let minutesST =  minutes.toString();
    if(minutes < 10) minutesST = '0' + minutesST
    let strForSMinuts = "Minute"
    if(minutes > 1) strForSMinuts = "Minutes"

    let secondsST =  seconds.toString();
    if(seconds < 10) secondsST = '0' + secondsST
    let strForSSecond = "Seconde"
    if(seconds > 1) strForSSecond = "Secondes"
    


    return `${joursST} ${strForSJour} - ${heuresST} ${strForSHeure} - ${minutesST} ${strForSMinuts} et ${secondsST} ${strForSSecond}`;
  }

}
