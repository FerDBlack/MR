import {Component, inject, Input} from '@angular/core';
import {ClientType} from "../../interfaces/clientType.interface";

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.css']
})
export class ProfileCardComponent {

  @Input() client?:ClientType;
}
