import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Attendance } from '../models/attendance.model';

@Injectable({ providedIn: 'root' })
export class AttendanceService {
  private baseUrl = 'http://localhost:8080/api/attendance';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Attendance[]> {
    return this.http.get<Attendance[]>(this.baseUrl);
  }

  create(attendance: Attendance): Observable<Attendance> {
    return this.http.post<Attendance>(this.baseUrl, attendance);
  }
}
