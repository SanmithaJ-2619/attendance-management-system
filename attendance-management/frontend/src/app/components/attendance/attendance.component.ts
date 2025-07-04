//import { FormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Attendance } from 'src/app/models/attendance.model';
//import { NgModule } from '@angular/core';
//import { BrowserModule } from '@angular/platform-browser';
//import { AppComponent } from '../app.component';

// @NgModule({
//   declarations: [
//     //AttendanceComponent
//   ],
//   imports: [
//     BrowserModule,
//     FormsModule
//   ],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }
@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent implements OnInit {
  newAttendance = {
    name: '',
    date: '',
    status: false
  };
  attendances: any[] = [];
  apiUrl = 'http://localhost:8080/api/attendance';  // Spring Boot backend URL
  attendanceService: any;
  newStudentId: string;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.attendanceService.getAll().subscribe(data => this.attendances = data);
    this.loadAttendances();
  }

  markAttendance() {
    const attendance: Attendance = {
      studentId: this.newStudentId,
      date: new Date().toLocaleDateString(),
      status: 'Present'
    };
  
    this.attendanceService.create(attendance).subscribe(() => {
      this.attendances.push(attendance);
      this.newStudentId = '';
    });
  }

  loadAttendances(): void {
    this.http.get<any[]>(this.apiUrl).subscribe(data => {
      this.attendances = data;
    });
  }

  addAttendance(): void {
    this.http.post<any>(this.apiUrl, this.newAttendance).subscribe(() => {
      this.loadAttendances();
      this.newAttendance = { name: '', date: '', status: false };
    });
  }
}