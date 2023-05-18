import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {
  pulso: EventEmitter<any> = new EventEmitter();

  enviarPulso() {
    this.pulso.emit();
  }
}
