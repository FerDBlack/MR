import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ClientType} from "../../interfaces/clientType.interface";
import {ClientService} from "../../services/client/client.service";
import {compareNumbers} from "@angular/compiler-cli/src/version_helpers";

@Component({
  selector: 'app-form-reservation',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.css'],
})
export class ReservationFormComponent implements OnInit, OnChanges {
  reservationForm: FormGroup;
  message: string = "Guardado correctamente";
  showToast: boolean = false;

  @Input() client?: ClientType;
  buttonWarningVisible: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private _clientService: ClientService,
  ) {
    this.reservationForm = this.formBuilder.group({
      name: ['', Validators.required],
      secondName: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  ngOnInit() {


  }

  ngOnChanges() {
    this.fillClientForm();

    if (this.client) {
      this.disableForm();
      this.buttonWarningVisible = true
    }
  }

  onSubmit() {
    const client = this.recoveryFormData();
    if (!this.client) {
      this._clientService.postClient(client)
        .subscribe(
          (data: any) => {
            // Handle success

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
    let reservations: [] = [];

    if(this.client?.reservations != null){
      reservations = this.client.reservations;
    }
    const client: ClientType = {name, secondName, email, phone, reservations};
    return client;
  }

  fillClientForm() {
    if (this.reservationForm && this.client != null) {
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
            console.log("ERROR",error, clientEdited.id, clientEdited)
          }
        );
    }
  }
}
