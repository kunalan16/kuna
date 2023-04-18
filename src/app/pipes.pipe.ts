import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipes'
})
export class PipesPipe implements PipeTransform {

  transform(value: string, ...args: string[]): string {
    return value+'kunalan'+args[0];
    // return value.substr(0,5) ;    

  }






}
