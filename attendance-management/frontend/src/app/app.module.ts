import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './components/app.component';
import { AttendanceComponent } from './components/attendance/attendance.component';
//import { AttendanceService } from './services/attendance.service';

@NgModule({
  declarations: [AppComponent, AttendanceComponent],
  imports: [BrowserModule, HttpClientModule, FormsModule],
  //providers: [AttendanceService],
  bootstrap: [AppComponent]
})
export class AppModule {}
