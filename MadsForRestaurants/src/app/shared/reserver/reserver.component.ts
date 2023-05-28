import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ClientType} from "../../interfaces/clientType.interface";
import {TableType} from "../../interfaces/tableType.interface";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ReservationType} from "../../interfaces/reservationType.interface";

@Component({
  selector: 'app-reserver',
  templateUrl: './reserver.component.html',
  styleUrls: ['./reserver.component.css']
})
export class ReserverComponent implements OnInit {
  currentClient!: ClientType;
  currentTable!: TableType;
  reservationForm: FormGroup;

  constructor(
    private _route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {
    this.reservationForm = this.formBuilder.group({
      name: [
        '',
        Validators.required,
        Validators.pattern(/^[A-Za-z\s\xF1\xD1]+$/)
      ],
      date: [
        '',
        Validators.required
      ],
      numClients: [
        '',
        Validators.required,
        Validators.pattern(/^([0-9])*$/),
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
      if (params['currentClient'] && params['tableSelected']) {
        this.currentClient = JSON.parse(params['currentClient']) as ClientType;
        this.currentTable = JSON.parse(params['tableSelected']) as TableType;
      }
    });

    this.reservationForm.patchValue({
      clientId: this.currentClient.name,
      tableId: this.currentTable.name
    });


  }


  submit() {
    if (this.reservationForm.valid) {
      const reservationData: ReservationType = this.reservationForm.value as ReservationType;
      // Realizar acciones con los datos de la reserva

      // Limpiar el formulario
      this.reservationForm.reset();
    } else {
      // Manejar la validación del formulario
    }
  }
}
