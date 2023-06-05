import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ClientType} from "../../interfaces/clientType.interface";
import {TableType} from "../../interfaces/tableType.interface";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ReservationType} from "../../interfaces/reservationType.interface";
import {ReservationService} from "../../services/reservation/reservation.service";
import {min} from "rxjs";

@Component({
  selector: 'app-reserver',
  templateUrl: './reserver.component.html',
  styleUrls: ['./reserver.component.css']
})
export class ReserverComponent implements OnInit {
  currentClient!: ClientType;
  currentTable!: TableType;
  reservationForm: FormGroup;
  minDate: string;
  maxDate: string;
  tableOccupied: boolean = false;
  dateOutOfDate: boolean = false;

  constructor(
    private _route: ActivatedRoute,
    private _reservationService: ReservationService,
    private formBuilder: FormBuilder
  ) {
    this.reservationForm = this.formBuilder.group({
      name: [
        '',
        Validators.required
      ],
      date: [
        '',
        Validators.required
      ],
      numClients: [
        '',
        Validators.required,
      ],
      clientId: [
        {
          value: '',
          disabled: true
        },
        Validators.required
      ],
      tableId: [
        {
          value: ''
          , disabled: true
        },
        Validators.required
      ]

    });

    const date = new Date();
    const currentYear = date.getFullYear()
    this.minDate = `${currentYear}-01-01`
    this.maxDate = `${currentYear}-06-30`
  }

  ngOnInit() {
    this._route.queryParams.subscribe(params => {
      if (params['currentClient'] && params['tableSelected']) {
        this.currentClient = JSON.parse(params['currentClient']) as ClientType;
        this.currentTable = JSON.parse(params['tableSelected']) as TableType;
      }
    });

    this.reservationForm.patchValue({
      clientId: this.currentClient.name,
      tableId: this.currentTable.name,

    });

  }


  submit() {
    if (this.reservationForm.valid) {
      const reservationData = this.recoveryFormData()
      const checkDate = reservationData.date.toString()
      const checkTableId = reservationData.tableId
      if (!(checkDate < new Date().toString())) {

        this._reservationService.getCheckOccupiedReservation(checkDate, checkTableId).subscribe(
          (reservesStatus: boolean) => {
            console.log(reservationData)
            console.log("ESTADO ACTUAL DE OCCUPIED", reservesStatus)
            if (!reservesStatus) {
              console.log("MESA LIBRE", reservationData)
              this._reservationService.postReservation(reservationData).subscribe(
                (reservation: ReservationType) => {
                  console.log("MESA RESERVADA", reservation)
                  this.reservationForm.reset();
                },
                (error) => {
                  console.log(error)
                }
              )

            } else {
              console.log("MESA OCUPADA")
              this.tableOccupied = true;
            }

          },
          (error) => {
            console.log(error)
          }
        )

      }else {
        console.log(checkDate)
        console.log( new Date().toString())
        this.dateOutOfDate = true;
      }

    }
  }

  private recoveryFormData() {
    const name: string = this.reservationForm.get('name')?.value;
    const date: Date = this.reservationForm.get('date')?.value;
    const numClients: number = this.reservationForm.get('numClients')?.value;
    const clientId: number = <number>this.currentClient.id;
    const tableId: number = <number>this.currentTable.id;
    const reservation: ReservationType = {date, numClients, clientId, tableId, name};
    return reservation;
  }


  protected readonly min = min;
}
