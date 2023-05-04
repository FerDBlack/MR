import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {TableType} from "../../interfaces/tables.interface";

@Injectable({
  providedIn: 'root'
})
export class TableService {


  private apiUrl: string = 'http://localhost:5130';
  constructor(private http: HttpClient) { }
  getTables():Observable<TableType[]>{
    return this.http.get<TableType[]>(`${this.apiUrl}/table`);
  }
}
