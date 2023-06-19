import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ClientType} from "../../interfaces/clientType.interface";
import {TableType} from "../../interfaces/tableType.interface";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ReservationType} from "../../interfaces/reservationType.interface";
import {ReservationService} from "../../services/reservation/reservation.service";
import * as moment from 'moment';

@Component({
  selector: 'app-reserver',
  templateUrl: './reserver.component.html',
  styleUrls: ['./reserver.component.css']
})
export class ReserverComponent implements OnInit {
  currentClient!: ClientType;
  currentTable!: TableType;
  dateSelected!: Date


  reservationForm: FormGroup;
  tableOccupied: boolean = false;
  dateOutOfDate: boolean = false;

  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _reservationService: ReservationService,
    private formBuilder: FormBuilder,
  ) {
    this.reservationForm = this.formBuilder.group({
      name: [
        '',
        Validators.required
      ],
      date: [
        {
          value: '',
          disabled: true
        },
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


  }

  ngOnInit() {
    this._route.queryParams.subscribe(params => {
      if (params['currentClient'] && params['tableSelected'] && params['dateSelected']) {
        this.currentClient = JSON.parse(params['currentClient']) as ClientType;
        this.currentTable = JSON.parse(params['tableSelected']) as TableType;
        this.dateSelected = JSON.parse(params['dateSelected']) as Date;
      }
    });
    const dateFormatted = moment(this.dateSelected).format('YYYY-MM-DD');

    this.reservationForm.patchValue({
      date: dateFormatted,
      clientId: this.currentClient.name,
      tableId: this.currentTable.name

    });

  }


  submit() {
    if (this.reservationForm.valid) {
      const reservationData = this.recoveryFormData()
      const formDate = new Date(reservationData.date)
      formDate.setHours(0, 0, 0, 0)


      this._reservationService.postReservation(reservationData).subscribe(
        (reservation: ReservationType) => {

          this.reservationForm.reset();
          window.history.back();

        },
        (error) => {
          console.log(error)
        }
      )


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


}
