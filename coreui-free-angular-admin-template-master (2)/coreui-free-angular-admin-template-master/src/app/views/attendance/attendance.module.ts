import { NgModule } from '@angular/core';
import { ModalModule } from 'ngx-bootstrap/modal/modal.module';
import { AlertModule } from 'ngx-bootstrap/alert';
import { CommonModule } from "@angular/common";
import { FormsModule,ReactiveFormsModule, FormControl } from '@angular/forms';
import { AttendanceComponent } from './attendance.component';
import { AttendanceRoutingModule } from './attendance-routing.module';


@NgModule({
  imports: [
    AttendanceRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    AlertModule.forRoot(),
  ],
  declarations: [ AttendanceComponent ]
})
export class AttendanceModule { }
