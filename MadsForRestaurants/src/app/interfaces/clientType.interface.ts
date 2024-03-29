import {ReservationType} from "./reservationType.interface";

export interface ClientType {
  id?:number;
  name: string;
  secondName: string;
  phone: string;
  email: string;
  reservations: ReservationType[];
}
