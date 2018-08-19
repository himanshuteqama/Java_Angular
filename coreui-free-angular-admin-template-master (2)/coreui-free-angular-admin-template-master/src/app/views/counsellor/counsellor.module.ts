import { NgModule } from '@angular/core';

import { ModalModule } from 'ngx-bootstrap/modal/modal.module';
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CounsellorComponent } from './counsellor.component';
import { CounsellorRoutingModule } from './counsellor-routing.module';
import { CounsellorPopupComponent } from './counsellor.modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { AlertModule } from 'ngx-bootstrap/alert';


@NgModule({
  imports: [
    CounsellorRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot()
  ],
  declarations: [ CounsellorComponent,CounsellorPopupComponent  ]
})
export class CounsellorModule { }
