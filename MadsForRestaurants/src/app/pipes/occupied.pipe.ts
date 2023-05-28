import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'occupied'
})
export class OccupiedPipe implements PipeTransform {
  transform(occupied:boolean): string {
    return occupied?"Ocupado":"Disponible"
  }

}
