import {ClientType} from "./client.interface";
import {TableType} from "./tables.interface";

export interface ReservationType {
  date: Date;
  numClients: number;
  clientId: number;
  tableId: number;
  name: string;
  client: ClientType;
  table: TableType;
}
