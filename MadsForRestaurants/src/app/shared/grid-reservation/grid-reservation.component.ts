import {Component, Input} from '@angular/core';
import {TableType} from "../../interfaces/tables.interface";

@Component({
  selector: 'app-grid-reservation',
  templateUrl: './grid-reservation.component.html',
  styleUrls: ['./grid-reservation.component.css']
})
export class GridReservationComponent {

  @Input() tables: TableType[] = [];

}
