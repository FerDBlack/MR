import {Component, Input, OnInit} from '@angular/core';
import {TableType} from "../../interfaces/tableType.interface";
import {WorkerType} from "../../interfaces/workerType.interface";
import {TableService} from "../../services/table/table.service";
import {ClientService} from "../../services/client/client.service";
import {ClientType} from "../../interfaces/clientType.interface";
import {CommunicationService} from "../../services/comunication/communication.service";
@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})
export class ReservationsComponent implements OnInit {

  tables: TableType[] = [];
  newClientCheck:Boolean = false;
  client! :ClientType;
  public name!: string;
  public phone!   : string;

  @Input() worker?: WorkerType;

  constructor(
    private  _tableService:TableService,
    private  _clientService:ClientService,
    private   _communicationService:CommunicationService
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


  checkClient() {

    this._clientService.getCheckClient(this.name, this.phone).subscribe(
      (client: ClientType) => {
        this.client = client;
        this.newClientCheck = true;
        this._communicationService.enviarPulso()

        console.log('Cliente obtenido:', this.client);
      },
      (error) => {
        console.log('Error al obtener el cliente', error);
      }
    );
  }


    checkNewClient() {
      this.newClientCheck = true;
  }
}
