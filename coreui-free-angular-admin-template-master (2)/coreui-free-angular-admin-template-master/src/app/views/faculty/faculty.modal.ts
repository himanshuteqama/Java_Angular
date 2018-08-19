import { Component, Input, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal/modal.directive';
import { Faculty } from '../../model/Faculty';
import { FormBuilder, FormGroup, FormControl,ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'faculty-modal',
  templateUrl: './faculty.modal.html',
})

export class FacultyPopupComponent implements OnInit {
  @Input() title: string = 'Edit faculty';
  @Input() message: string = 'Message here...';
  @ViewChild('lgModal') public lgModal:ModalDirective;
  private faculty: Faculty;
  editform :FormGroup;
  constructor(private formBuilder: FormBuilder) { }


  ngOnInit() {

    this.editform = this.formBuilder.group(
      {
        firstName : new FormControl (''),
        lastName :  new FormControl (''),
        email : new FormControl(''),
        mobile : new FormControl (''),
        city : new FormControl (''),
        subjects : new FormControl (''),
        class : new FormControl ('')
      }
    )
  }

  public clickOk() {
    console.log("Click ok...");
    // this.lgModal
  }

  public showForModal(faculty: Faculty) {
    this.faculty = faculty;
    this.lgModal.show();
  }
}