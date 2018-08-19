import { Component, Input, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal/modal.directive';
import { Admin } from '../../../../coreui-free-angular-admin-template-master/src/app/model/Admin';
import { FormBuilder, FormGroup, FormControl,ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'admin-modal',
  templateUrl: './admin.modal.html',
})

export class AdminPopupComponent implements OnInit {
  @Input() title: string = 'Edit Admin';
  @Input() message: string = 'Message here...';
  @ViewChild('lgModal') public lgModal:ModalDirective;
  private admin: Admin;
  editform :FormGroup;
  constructor(private formBuilder: FormBuilder) { }


  ngOnInit() {

    this.editform = this.formBuilder.group(
      {
        firstname : new FormControl (''),
        lastname :  new FormControl (''),
        email : new FormControl(''),
        mobile : new FormControl (''),
      }
    )
  }

  public clickOk() {
    console.log("Click ok...");
    // this.lgModal
  }

  public showForModal(admin: Admin) {
    this.admin = admin;
    this.lgModal.show();
  }
}