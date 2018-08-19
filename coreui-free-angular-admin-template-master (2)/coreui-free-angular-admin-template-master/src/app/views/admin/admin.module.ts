import { NgModule } from '@angular/core';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { ModalModule } from 'ngx-bootstrap/modal/modal.module';
import { AlertModule } from 'ngx-bootstrap/alert';
import { CommonModule } from "@angular/common";
import { FormsModule,ReactiveFormsModule, FormControl } from '@angular/forms';
import { AdminPopupComponent } from './admin.modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';


@NgModule({
  imports: [
    AdminRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    AlertModule.forRoot(),
  ],
  declarations: [ AdminComponent, AdminPopupComponent ],
})
export class AdminModule { }
