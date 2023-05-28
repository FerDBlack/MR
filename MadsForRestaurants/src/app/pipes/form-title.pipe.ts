import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formTitle'
})
export class FormTitlePipe implements PipeTransform {

  transform(registered:boolean): string {
    return registered?"Edite su información":"Registrate"
  }

}
