import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ClientType} from "../../interfaces/clientType.interface";
import {ClientService} from "../../services/client/client.service";
import {ReservationType} from "../../interfaces/reservationType.interface";

@Component({
  selector: 'app-form-reservation',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.css'],
})
export class ReservationFormComponent implements OnInit, OnChanges {
  reservationForm: FormGroup;
  message: string = "Guardado correctamente";
  showToast: boolean = false;
  clientLoaded: boolean = false;

  @Output() visibilityStatus = new EventEmitter<boolean>();
  @Output() newClientCheck = new EventEmitter<boolean>();
  @Output() newClient = new EventEmitter<ClientType>();


  @Input() client?: ClientType;
  buttonEditVisible: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private _clientService: ClientService,
  ) {
    this.reservationForm = this.formBuilder.group({
      name: [
        '',
        [Validators.required,
          Validators.pattern(/^[A-Za-z\s\xF1\xD1]+$/)
        ]
      ],
      secondName: [
        '',
        [Validators.required,
          Validators.pattern(/^[A-Za-z\s\xF1\xD1]+$/)
        ]
      ],
      phone: [
        '',
        [Validators.required,
          Validators.minLength(7),
          Validators.maxLength(10),
          Validators.pattern(/^([0-9])*$/),
        ]
      ],

      email: [
        '',
        [Validators.required,
          Validators.email
        ]
      ],
    });
  }

  ngOnInit() {

    this.disableForm();

  }

  ngOnChanges() {
    this.fillClientForm();
    if (this.client) {
      this.buttonEditVisible = true;
      this.visibilityStatus.emit(true);

    }
  }

  onSubmit() {
    const client = this.recoveryFormData();
    if (!this.client) {
      this._clientService.postClient(client)
        .subscribe(
          (data: any) => {
            // Handle success
            this.visibilityStatus.emit(true);
          },
          (error: any) => {
            // Handle error
          }
        );
    }
  }

  private recoveryFormData() {
    const name: string = this.reservationForm.get('name')?.value;
    const secondName: string = this.reservationForm.get('secondName')?.value;
    const phone: string = this.reservationForm.get('phone')?.value;
    const email: string = this.reservationForm.get('email')?.value;
    let reservations: ReservationType[] = [];

    if (this.client?.reservations != null) {
      reservations = this.client.reservations;
    }
    const client: ClientType = {name, secondName, email, phone, reservations};
    this.newClient.emit(client)
    return client;
  }

  fillClientForm() {
    if (this.reservationForm && this.client != null) {
      this.clientLoaded = true;
      this.reservationForm.patchValue({
        name: this.client?.name,
        secondName: this.client?.secondName,
        phone: this.client?.phone,
        email: this.client?.email
      });
    }
  }

  disableForm() {
    this.reservationForm.disable();
  }

  enableForm() {
    this.reservationForm.enable();

  }

  editClient() {
    if (this.client?.id != null) {
      const clientEdited = this.recoveryFormData();
      const clientID: number = this.client.id;
      clientEdited.id = clientID;
      this._clientService.putClient(clientID, clientEdited)
        .subscribe(
          (data: any) => {
            // Handle success
            console.log("EDITADO", clientEdited)
          },
          (error: any) => {
            console.log("ERROR", error, clientEdited.id, clientEdited)
          }
        );
    }
  }

  cancelForm() {
    this.newClientCheck.emit(false)

  }
}
