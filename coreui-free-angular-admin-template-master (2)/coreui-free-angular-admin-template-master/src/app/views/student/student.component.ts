import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup,FormControl,ReactiveFormsModule, Validators} from '@angular/forms';
import { ModalDirective } from 'ngx-bootstrap/modal';
import {Router } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal/bs-modal.service';
import { ModalOptions } from 'ngx-bootstrap/modal/modal-options.class';
import { Directive } from '@angular/core/src/metadata/directives';
import { ViewChild } from '@angular/core';
import { StudentPopupComponent } from './student.modal';
import { Student } from '../../model/Student';
import { DataTable } from 'angular-6-datatable/lib/src/DataTable';
import { FormArray } from '@angular/forms/src/model';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss'],
  providers: [StudentPopupComponent]
})
export class StudentComponent implements OnInit {

  @Input() formControl: FormControl;
  @ViewChild(StudentPopupComponent)  myModal : StudentPopupComponent;
  errorMsg : String;
  studentform :FormGroup;
  public students : any[] = [
    {
      "rollNo" : "A112",
      "firstName":"Ananya",
      "lastName":"Shukla",
      "parentsName" : "A.K Shukla",
      "email":"ananya@gmail.com",
      "subject" : [
        {
          "name" : "Chemistry",
          "isSelected": false
        },
        {
         "name" : "Physics",
         "isSelected": false
        },
        {
         "name" : "Mathematics",
          "isSelected": false
        },
        {
          "name" : "Biology",
          "isSelected" : false
        }
      ],
      "mobile":"9900876777",
      "parentsNo" : "9778772213",
      "school" : "SP Public school",
      "batchName" : "XII_A"

    },
    {
      "rollNo" : "A116",
      "firstName":"Vivek",
      "lastName":"Singh",
      "parentsName" : "N Singh",
      "email":"vivek@gmail.com",
      "subject" : [
        {
          "name" : "Chemistry",
          "isSelected": false
        },
        {
         "name" : "Physics",
         "isSelected": false
        },
        {
         "name" : "Mathematics",
          "isSelected": false
        },
        {
          "name" : "Biology",
          "isSelected" : false
        }
      ],
      "mobile":"9989675644",
      "parentsNo" : "9778772213",
      "school" : "SP Public school",
      "batchName" : "XII_A"

    },
    {
      "rollNo" : "A136",
      "firstName":"Harshi",
      "lastName":"Agarwal",
      "parentsName" : "Anand Agarwal",
      "email":"harshit@gmail.com",
      "subject" : [
        {
          "name" : "Chemistry",
          "isSelected": false
        },
        {
         "name" : "Physics",
         "isSelected": false
        },
        {
         "name" : "Mathematics",
          "isSelected": false
        },
        {
          "name" : "Biology",
          "isSelected" : false
        }
      ],
      "mobile":"9123456789",
      "parentsNo" : "9778772213",
      "school" : "SJS Public school",
      "batchName" : "XII_A"
    }
  ];

  constructor(private modalService: BsModalService,private route : Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.studentform = this.formBuilder.group(
      {
        rollNo : new FormControl ('',[Validators.required]),
        firstName : new FormControl ('',[Validators.required]),
        lastName : new FormControl ('',[Validators.required]),
        parentsName : new FormControl('',[Validators.required]),
        email : new FormControl ('', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')] ),
        mobile : new FormControl ('',[Validators.required, Validators.minLength(10)]),
        parentsNo : new FormControl ('',[Validators.required, Validators.minLength(10)]),
        //  subject : new FormArray ([]),
        // subject : this.formBuilder.group(
        //   {
        //     mathematics : this.formBuilder.group(this.formControl.value.subject),
        //     chemistry : this.formBuilder.group(this.formControl.value.subject),
        //     physics : this.formBuilder.group(this.formControl.value.subject),
        //     biology : this.formBuilder.group(this.formControl.value.subject),
        //     commerce : this.formBuilder.group(this.formControl.value.subject)

        //   }
        // ),
        address : new FormControl ('',[Validators.required]),
        school : new FormControl ('',[Validators.required]),
        batchName : new FormControl ('',[Validators.required]),
        class : new FormControl ('',[Validators.required])
        
      }
    )

  }
  public getStudentForEdit(student: Student) {
    console.log(student);
    this.myModal.showForModal(student);

}
  }

