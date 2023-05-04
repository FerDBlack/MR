import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {ClientType} from "../../interfaces/client.interface";

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private apiUrl: string = 'http://localhost:5130';
  private httpHeaders: HttpHeaders = new HttpHeaders({
    'Content-Type':'application/json',
  });
  constructor(private http: HttpClient) { }


  getAllClients():Observable<ClientType[]>{
    const url =`${this.apiUrl}/clients`;
    return this.http.get<ClientType[]>(url);
  }

  postClient(client: ClientType):Observable<ClientType>{
    const url =`${this.apiUrl}/client/add`;
    return this.http.post<ClientType>(url,JSON.stringify(client),{headers: this.httpHeaders});
  }


}
