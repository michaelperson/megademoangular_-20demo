import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipe2'
})
export class CustomPipe2Pipe implements PipeTransform {

  transform(value: number, ...args: number[]): number
  {
    console.log(args)
    let res = Math.pow(value, args[0])
    return res;
  }

}
