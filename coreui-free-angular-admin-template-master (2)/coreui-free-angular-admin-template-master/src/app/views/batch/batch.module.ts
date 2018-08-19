import { NgModule } from '@angular/core';

import { ModalModule } from 'ngx-bootstrap/modal/modal.module';
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BatchComponent } from './batch.component';
import { BatchRoutingModule } from './batch-routing.module';
import { BatchPopupComponent } from './batch.modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { AlertModule } from 'ngx-bootstrap/alert';
import { DataTableModule } from 'angular-6-datatable';


@NgModule({
  imports: [
    BatchRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    DataTableModule
  ],
  declarations: [ BatchComponent, BatchPopupComponent ]
})
export class BatchModule { }
