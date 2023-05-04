import {Component, Input, OnInit} from '@angular/core';
import {TableType} from "../../interfaces/tables.interface";
import {WorkerType} from "../../interfaces/worker.interface";
import {TableService} from "../../services/Table/table.service";
import {ClientService} from "../../services/client/client.service";
@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})
export class ReservationsComponent implements OnInit {

  tables: TableType[] = [];

  @Input() worker?: WorkerType;

  constructor(
    private  _tableService:TableService,
  ) {}

  ngOnInit(): void {
    this._tableService.getTables().subscribe(
      (data: TableType[]) => {
        this.tables = data;
      },
      (error) => {
        console.log('Error al obtener las mesas', error);
      }
    );
  }






}
