import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { TableType } from "../../interfaces/tableType.interface";

@Injectable({
  providedIn: 'root'
})
export class TableService {

  private apiUrl: string = 'http://localhost:5130';
  private httpHeaders: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  constructor(private http: HttpClient) { }

  getTables(): Observable<TableType[]> {
    const url = `${this.apiUrl}/table`;
    return this.http.get<TableType[]>(url);
  }

  getTable(id: number): Observable<TableType> {
    const url = `${this.apiUrl}/table/${id}`;
    return this.http.get<TableType>(url);
  }

  postTable(table: TableType): Observable<TableType> {
    const url = `${this.apiUrl}/table/add`;
    return this.http.post<TableType>(url, JSON.stringify(table), { headers: this.httpHeaders });
  }

  putTable(id: number, table: TableType): Observable<void> {
    const url = `${this.apiUrl}/table/${id}`;
    return this.http.put<void>(url, JSON.stringify(table), { headers: this.httpHeaders });
  }

  deleteTable(id: number): Observable<void> {
    const url = `${this.apiUrl}/table/${id}`;
    return this.http.delete<void>(url);
  }
}
