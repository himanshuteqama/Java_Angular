import { Component, Input, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal/modal.directive';
import { Student } from '../../model/Student';
import { FormBuilder, FormGroup, FormControl,ReactiveFormsModule, Validators} from '@angular/forms';
import { StudentComponent } from './student.component';

@Component({
  selector: 'student-modal',
  templateUrl: './student.modal.html',
})

export class StudentPopupComponent implements OnInit {
  @Input() title: string = 'Edit Student';
  @Input() message: string = 'Message here...';
  @ViewChild('lgModal') public lgModal:ModalDirective;
  private student: Student;
  editform :FormGroup;
  constructor(private formBuilder: FormBuilder) { }


  ngOnInit() {

    this.editform = this.formBuilder.group(
      {
        rollNo : new FormControl(''),
        firstName : new FormControl (''),
        lastName :  new FormControl (''),
        parentsName : new FormControl(''),
        email : new FormControl(''),
        mobile : new FormControl (''),
        parentsNo : new FormControl(''),
        school : new FormControl (''),
        batchName : new FormControl('')


      }
    )
  }

  public clickOk() {
    console.log("Click ok...");
    // this.lgModal
  }

  public showForModal(student: Student) {
    this.student = student;
    this.lgModal.show();
  }
}