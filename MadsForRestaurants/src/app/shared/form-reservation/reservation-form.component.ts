import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ClientType} from "../../interfaces/clientType.interface";
import {ClientService} from "../../services/client/client.service";
import {CommunicationService} from "../../services/comunication/communication.service";

@Component({
  selector: 'app-form-reservation',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.css'],
})
export class ReservationFormComponent implements OnInit {
  reservationForm: FormGroup;
  message: string = "Guardado correctamente";
  showToast: boolean = false;

  @Input() client?: ClientType;

  constructor(
    private formBuilder: FormBuilder,
    private _clientService: ClientService,
    private _communicationService: CommunicationService,
  ) {
    this.reservationForm = this.formBuilder.group({
      name: ['', Validators.required],
      secondName: ['', Validators.required],
      phone: ['', Validators.pattern(/^\d{10}$/)],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  ngOnInit() {

    this._communicationService.pulso.subscribe(() => {
      this.fillClientForm();
    });
  }

  onSubmit() {
    const name: string = this.reservationForm.get('name')?.value;
    const secondName: string = this.reservationForm.get('secondName')?.value;
    const phone: string = this.reservationForm.get('phone')?.value;
    const email: string = this.reservationForm.get('email')?.value;
    const client: ClientType = {name, secondName, email, phone, reservations: []};

    this._clientService.postClient(client)
      .subscribe(
        (data: any) => {
          // Handle success
          this.showToast = true

        },
        (error: any) => {
          // Handle error
        }
      );
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

}
