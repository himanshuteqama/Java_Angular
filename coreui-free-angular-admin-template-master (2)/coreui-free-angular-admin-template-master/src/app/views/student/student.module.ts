import { NgModule } from '@angular/core';
import { StudentRoutingModule } from './student-routing.module';
import { StudentComponent } from './student.component';
import { ModalModule } from 'ngx-bootstrap/modal/modal.module';
import { CommonModule } from "@angular/common";
import { FormsModule,ReactiveFormsModule, FormControl } from '@angular/forms';
import { StudentPopupComponent } from './student.modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { AlertModule } from 'ngx-bootstrap/alert';
import { DataTableModule } from 'angular-6-datatable';

@NgModule({
  imports: [
    StudentRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    DataTableModule
  ],
  declarations: [ StudentComponent, StudentPopupComponent ]
})
export class StudentModule { }
