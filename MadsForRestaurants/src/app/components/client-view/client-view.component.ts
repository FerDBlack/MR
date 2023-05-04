import {Component, Input} from '@angular/core';
import {ClientType} from "../../interfaces/client.interface";

@Component({
  selector: 'app-client-view',
  templateUrl: './client-view.component.html',
  styleUrls: ['./client-view.component.css']
})
export class ClientViewComponent {

  @Input() client?:ClientType

}
