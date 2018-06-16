import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'formatCases'})
export class FormatCasesPipe implements PipeTransform {
  transform(value: string): string {
    value = value + ""; // in case it's a number
    // upper cases the first letter
    var returnString = "";
    if (value.length > 0){
      returnString += value.substr(0,1).toUpperCase();
      if (value.length > 1) {
        returnString += value.substr(1, value.length);
      }
    }
    return returnString;
  }
}
