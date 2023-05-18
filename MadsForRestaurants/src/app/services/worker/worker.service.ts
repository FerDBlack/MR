import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { WorkerType } from "../../interfaces/workerType.interface";

@Injectable({
  providedIn: 'root'
})
export class WorkerService {

  private apiUrl: string = 'http://localhost:5130';
  private httpHeaders: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  constructor(private http: HttpClient) { }

  getWorkers(): Observable<WorkerType[]> {
    const url = `${this.apiUrl}/worker`;
    return this.http.get<WorkerType[]>(url);
  }

  getWorker(id: number): Observable<WorkerType> {
    const url = `${this.apiUrl}/worker/${id}`;
    return this.http.get<WorkerType>(url);
  }

  createWorker(worker: WorkerType): Observable<WorkerType> {
    const url = `${this.apiUrl}/worker`;
    return this.http.post<WorkerType>(url, JSON.stringify(worker), { headers: this.httpHeaders });
  }

  updateWorker(id: number, worker: WorkerType): Observable<void> {
    const url = `${this.apiUrl}/worker/${id}`;
    return this.http.put<void>(url, JSON.stringify(worker), { headers: this.httpHeaders });
  }

  deleteWorker(id: number): Observable<void> {
    const url = `${this.apiUrl}/worker/${id}`;
    return this.http.delete<void>(url);
  }
}
