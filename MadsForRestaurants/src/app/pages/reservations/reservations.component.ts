import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TableType} from "../../interfaces/tableType.interface";
import {WorkerType} from "../../interfaces/workerType.interface";
import {TableService} from "../../services/table/table.service";
import {ClientService} from "../../services/client/client.service";
import {ClientType} from "../../interfaces/clientType.interface";
import {ReservationService} from "../../services/reservation/reservation.service";
import {ReservationType} from "../../interfaces/reservationType.interface";
import * as moment from "moment/moment";

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})
export class ReservationsComponent implements OnInit {

  tables: TableType[] = [];
  tablesFiltered: TableType[] = [];
  reservations: ReservationType[] = [];
  newClientCheck: Boolean = false;
  client!: ClientType;
  newClient!: ClientType;

  public name: string = "juan";
  public phone: string = "123456789";
  showMap: boolean = false;
  showGrid: boolean = false;
  @Input() worker?: WorkerType;

  activateEditEvent: boolean = false
  dateSelected!: Date
  minDate: string;
  maxDate: string;
  dateSelectedOutOfDate: boolean = false;

  constructor(
    private _tableService: TableService,
    private _reservationService: ReservationService,
    private _clientService: ClientService,
  ) {
    this.dateSelected = new Date()
    const date = new Date();
    const currentYear = date.getFullYear()
    this.minDate = `${currentYear}-01-01`
    this.maxDate = `${currentYear}-06-30`


  }

  ngOnInit(): void {

    const currentDate = new Date().toISOString().split('T')[0];


    this._reservationService.getTodayReservation(currentDate).subscribe(
      (data: ReservationType[]) => {
        this.reservations = data;
        console.log("RESERVAR", data)
      },
      (error) => {
        console.log('Error al obtener las reservas', error);
      }
    );

    this._tableService.getTables().subscribe(
      (data: TableType[]) => {
        this.tables = data;
        console.log("MESAS", data)

      },
      (error) => {
        console.log('Error al obtener las mesas', error);
      }
    );


  }

  onDateChange(event: any) {
    this.dateSelected = new Date(event.target.value);

    const dateSelectedFormatted = moment(this.dateSelected).format('YYYY-MM-DD');
    const currentDateFormatted = moment(new Date()).format('YYYY-MM-DD');
    console.log("Onchange", dateSelectedFormatted);

    if (dateSelectedFormatted < currentDateFormatted) {
      this.dateSelectedOutOfDate = true

    } else {
      this.dateSelectedOutOfDate = false
      this._reservationService.getTodayReservation(dateSelectedFormatted).subscribe(
        (data: ReservationType[]) => {
          this.reservations = data;
          console.log("RESERVAS", data);
          this.tablesFiltered = this.getTablesReserved(this.tables, this.reservations);
          console.log(this.tablesFiltered);

        },
        (error) => {
          this.refreshTableOccupied()
          console.log('Error al obtener las reservas', error);
        }
      );
    }

  }

  checkClient() {
    this._clientService.getCheckClient(this.name, this.phone).subscribe(
      (client: ClientType) => {
        this.activateEditEvent = false
        this.client = client;
        this.newClientCheck = true;
        this.tablesFiltered = this.getTablesReserved(this.tables, this.reservations);
      },
      (error) => {
        console.log('Error al obtener el cliente', error);
      }
    );
  }

  getTablesReserved(tables: TableType[], reservations: ReservationType[]): TableType[] {
    const reservedTableIds = reservations
      .map(
        (reservation) => reservation.tableId
      );
    return tables
      .map(
        (table) =>
          (
            {
              ...table,
              occupied: reservedTableIds.includes(<number>table.id) ? true : table.occupied,
            }
          )
      );
  }


  makeNewClient() {
    this.newClientCheck = true;
    this.activateEditEvent = true;
    this.tablesFiltered = this.getTablesReserved(this.tables, this.reservations);

  }

  waitVisibilityStatus($event: boolean) {
    this.showMap = $event.valueOf()
    this.showGrid = $event.valueOf()
  }

  cancelForm($event: boolean) {
    this.newClientCheck = false;
  }

  receiveNewClient($event: ClientType) {
    this.newClient = $event
  }



  refreshTableOccupied() {
    this.tablesFiltered.map(table => table.occupied = false)
  }
}
