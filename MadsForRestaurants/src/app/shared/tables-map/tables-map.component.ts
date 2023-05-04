import {Component, Input} from '@angular/core';
import {TableType} from "../../interfaces/tables.interface";


@Component({
  selector: 'app-tables-map',
  templateUrl: './tables-map.component.html',
  styleUrls: ['./tables-map.component.css']
})
export class TablesMapComponent {
  @Input() tables: TableType[] = [];
  @Input() unit: string = 'px';

}
