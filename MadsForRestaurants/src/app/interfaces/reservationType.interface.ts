import {ClientType} from "./clientType.interface";
import {TableType} from "./tableType.interface";

export interface ReservationType{
  date: Date;
  numClients: number;
  clientId: number;
  tableId: number;
  name: string;
  client: ClientType;
  table: TableType;
}
