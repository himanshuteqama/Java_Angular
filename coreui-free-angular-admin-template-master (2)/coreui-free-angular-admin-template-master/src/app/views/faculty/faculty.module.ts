import { NgModule } from '@angular/core';

import { FacultyComponent } from './faculty.component';
import { FacultyRoutingModule } from './faculty-routing.module';
import { ModalModule } from 'ngx-bootstrap/modal/modal.module';
import { CommonModule } from "@angular/common";
import { FormsModule,ReactiveFormsModule, FormControl } from '@angular/forms';
import { DataTableModule } from 'angular-6-datatable';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { AlertModule } from 'ngx-bootstrap/alert';
import { FacultyPopupComponent } from './faculty.modal';


@NgModule({
  imports: [
    FacultyRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    DataTableModule
  ],
  declarations: [ FacultyComponent, FacultyPopupComponent
 ]
})
export class FacultyModule { }
