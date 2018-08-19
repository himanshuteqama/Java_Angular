import { Component, OnInit, Input } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';
import {Batch} from '../../model/Batch';
import { FormBuilder, FormGroup, FormControl,ReactiveFormsModule, Validators} from '@angular/forms';
import { BsModalService } from 'ngx-bootstrap/modal/bs-modal.service';
import { ModalOptions } from 'ngx-bootstrap/modal/modal-options.class';
import { Directive } from '@angular/core/src/metadata/directives';
import { ViewChild } from '@angular/core';
import { DataTable } from 'angular-6-datatable/lib/src/DataTable';
import { BatchPopupComponent } from './batch.modal';


@Component({
  selector: 'app-batch',
  templateUrl: './batch.component.html',
  styleUrls: ['./batch.component.scss'],
  providers: [BatchPopupComponent]
})
export class BatchComponent implements OnInit {

  @Input() formControl: FormControl;
  @ViewChild(BatchPopupComponent)  myModal : BatchPopupComponent;
  batchform :FormGroup;
  public batches : any[] = [
  {
    "batchName":"C2",
    "class":"XIIth",
    "subject":"Chemistry",
  },
  {
    "batchName":"C3",
    "class":"XIIth",
    "subject":"Physics",

  }
];
  constructor(private modalService: BsModalService, private route : Router, private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.batchform = this.formBuilder.group(
      {
        batchName : new FormControl ('',[Validators.required]),
        class :  new FormControl ('',[Validators.required]),
        subject : new FormControl ('',[Validators.required, Validators.minLength(10)]),
      }
    )
  }
  public getBatchForEdit(batch: Batch) {
    console.log(batch);
    this.myModal.showForModal(batch);

}

}
