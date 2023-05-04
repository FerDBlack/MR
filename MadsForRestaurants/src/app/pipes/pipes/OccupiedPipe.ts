import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'occupiedPipe'
})
export class OccupiedPipe implements PipeTransform {
  transform(occupied:boolean): string {
    return occupied?"Ocupado":"Disponible"
  }

}
