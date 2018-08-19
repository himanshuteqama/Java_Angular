import { Component, Input, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal/modal.directive';
import { Counsellor } from '../../model/Counsellor';
import { FormBuilder, FormGroup, FormControl,ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'counsellor-modal',
  templateUrl: './counsellor.modal.html',
})

export class CounsellorPopupComponent implements OnInit {
  @Input() title: string = 'Edit Counsellor';
  @Input() message: string = 'Message here...';
  @ViewChild('lgModal') public lgModal:ModalDirective;
  private counsellor: Counsellor;
  editform :FormGroup;
  constructor(private formBuilder: FormBuilder) { }


  ngOnInit() {

    this.editform = this.formBuilder.group(
      {
        firstName : new FormControl (''),
        lastName :  new FormControl (''),
        email : new FormControl(''),
        mobile : new FormControl (''),
      }
    )
  }

  public clickOk() {
    console.log("Click ok...");
    // this.lgModal
  }

  public showForModal(counsellor: Counsellor) {
    this.counsellor = counsellor;
    this.lgModal.show();
  }
}