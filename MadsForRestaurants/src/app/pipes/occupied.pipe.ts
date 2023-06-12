import {Pipe, PipeTransform} from "@angular/core";
import {TableType} from "../interfaces/tableType.interface";

@Pipe({
  name: 'occupied'
})
export class OccupiedPipe implements PipeTransform {
  transform(table: TableType): string {
    return table.occupied?"Reservar otro día":"Reservar"
  }

}
