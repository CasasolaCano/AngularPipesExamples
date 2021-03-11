import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'password'
})
export class PasswordPipe implements PipeTransform {

  transform(value: string, activate?: boolean): string {
    
    let pass : string = ""; 
    let count : number = value.length;

    if(activate == true) {

      for(let i = 0; i < count; i++) {
        pass += "*";
      }

      return pass;

    } else if( activate == false) {
      return value;
    }
    return value;
  }

}
