import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ClientType} from "../../interfaces/client.interface";
import {ClientService} from "../../services/client/client.service";

@Component({
  selector: 'app-form-reservation',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.css'],
})
export class ReservationFormComponent {
  reservationForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private _clientService: ClientService,
  ) {
    this.reservationForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      telefono: ['', Validators.pattern(/^\d{10}$/)]
    });
  }

  onSubmit() {

    const name: string = this.reservationForm.get('nombre')?.value;
    const secondName: string = this.reservationForm.get('apellido')?.value;
    const email: string = this.reservationForm.get('correo')?.value;
    const phone: string = this.reservationForm.get('telefono')?.value;
    const client: ClientType = { name, secondName, email, phone, reservations: []};

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
