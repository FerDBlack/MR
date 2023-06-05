import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { ReservationType } from "../../interfaces/reservationType.interface";

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private apiUrl: string = 'http://localhost:5130';
  private httpHeaders: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  constructor(private http: HttpClient) { }

  getReservations(): Observable<ReservationType[]> {
    const url = `${this.apiUrl}/reservation`;
    return this.http.get<ReservationType[]>(url);
  }

  getReservation(id: number): Observable<ReservationType> {
    const url = `${this.apiUrl}/reservation/${id}`;
    return this.http.get<ReservationType>(url);
  }
  getTodayReservation(dateToday: string): Observable<ReservationType[]> {
    const url = `${this.apiUrl}/reservation/today?date=${dateToday}`;
    return this.http.get<ReservationType[]>(url);
  }
  getCheckOccupiedReservation(dateToday: string, tableId:number): Observable<boolean> {
    const url = `${this.apiUrl}/reservation/checkOccupiedReservation?date=${dateToday}&tableId=${tableId}`;
    return this.http.get<boolean>(url);
  }

  postReservation(reservation: ReservationType): Observable<ReservationType> {
    const url = `${this.apiUrl}/reservation/add`;
    return this.http.post<ReservationType>(url, JSON.stringify(reservation), { headers: this.httpHeaders });
  }

  updateReservation(id: number, reservation: ReservationType): Observable<void> {
    const url = `${this.apiUrl}/reservation/${id}`;
    return this.http.put<void>(url, JSON.stringify(reservation), { headers: this.httpHeaders });
  }

  deleteReservation(id: number): Observable<void> {
    const url = `${this.apiUrl}/reservation/${id}`;
    return this.http.delete<void>(url);
  }
}
