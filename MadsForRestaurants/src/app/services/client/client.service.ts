import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { ClientType } from "../../interfaces/clientType.interface";

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private apiUrl: string = 'http://localhost:5130';
  private httpHeaders: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  constructor(private http: HttpClient) { }

  getClients(): Observable<ClientType[]> {
    const url = `${this.apiUrl}/client`;
    return this.http.get<ClientType[]>(url);
  }

  getClient(id: number): Observable<ClientType> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<ClientType>(url);
  }
  getCheckClient(name: string, phone: string): Observable<ClientType> {
    const url = `${this.apiUrl}/check?name=${name}&phone=${phone}`;
    return this.http.get<ClientType>(url);
  }

  postClient(client: ClientType): Observable<ClientType> {
    const url = `${this.apiUrl}/add`;
    return this.http.post<ClientType>(url, JSON.stringify(client), { headers: this.httpHeaders });
  }

  putClient(id: number, client: ClientType): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<void>(url, JSON.stringify(client), { headers: this.httpHeaders });
  }

  deleteClient(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}
