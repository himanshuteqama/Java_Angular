import { Component, Input, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal/modal.directive';
import { Batch } from '../../model/Batch';
import { FormBuilder, FormGroup, FormControl,ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'batch-modal',
  templateUrl: './batch.modal.html',
})

export class BatchPopupComponent implements OnInit {
  @Input() title: string = 'Edit Batch Details';
  @Input() message: string = 'Message here...';
  @ViewChild('lgModal') public lgModal:ModalDirective;
  private batch: Batch;
  editform :FormGroup;
  constructor(private formBuilder: FormBuilder) { }


  ngOnInit() {

    this.editform = this.formBuilder.group(
      {
        batchName : new FormControl (''),
        class :  new FormControl (''),
        subject : new FormControl (''),
      }
    )
  }

  public clickOk() {
    console.log("Click ok...");
    // this.lgModal
  }

  public showForModal(batch: Batch) {
    this.batch = batch;
    this.lgModal.show();
  }
}