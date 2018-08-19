import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup,FormControl,ReactiveFormsModule, Validators} from '@angular/forms';
import {Router } from '@angular/router';
import { error } from 'util';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { DataTable } from 'angular-6-datatable/lib/src/DataTable';
import { FacultyPopupComponent } from './faculty.modal';
import {Faculty} from '../../model/Faculty';
import { BsModalService } from 'ngx-bootstrap/modal/bs-modal.service';
import { ModalOptions } from 'ngx-bootstrap/modal/modal-options.class';
import { Directive } from '@angular/core/src/metadata/directives';
import { ViewChild } from '@angular/core';


@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.scss'],
  providers: [FacultyPopupComponent]
})
export class FacultyComponent implements OnInit {
  @Input() formControl: FormControl;
  @ViewChild(FacultyPopupComponent)  myModal : FacultyPopupComponent;
  errorMsg : String;
  facultyform :FormGroup;
  private faculty : Faculty;
  public faculties : any[] = [
    {
      "firstname":"Ranjan",
      "lastname":"Singh",
      "mobile":"8890887788",
      "email":"ranjan@gmail.com",
      "city" : "Pune",
      "subjects" : "Mathematics",
      "class" : "XIIth"
    },
    {
      "firstname":"Vivek",
      "lastname":"Tiwari",
      "mobile":"9989675644",
      "email":"vivek@gmail.com",
      "city" : "Pune",
      "subjects" : "Physics",
      "class" : "XIIth"

    },
    {
      "firstname":"Aniket",
      "lastname":"Shukla",
      "mobile":"9123456789",
      "email":"aniket@gmail.com",
      "city" : "Mumbai",
      "subjects" : "Biology",
      "class" : "Xth"
    }
  ];
  
public filterQuery = '';
public sortByName = 'firstName';
public sortOrder = 'asc';

public myName = "This is my name";

constructor(private modalService: BsModalService,private route : Router, private formBuilder: FormBuilder) {

}

  ngOnInit() {
    this. faculty = new Faculty();
    this.faculty.firstname = "Raghav",
    this.faculty.lastname = "shastri",
    this.faculty.email = "raghav@yahoo.com",
    this.faculty.mobile = "7788987867",
    this.faculty.city = "Pune",
    this.faculty.subjects = "Mathematics",
    this.faculty.class = "XIIth"
    
    this.facultyform = this.formBuilder.group(
      {
        firstName : new FormControl ('',[Validators.required]),
        lastName : new FormControl ('',[Validators.required]),
        email : new FormControl ('', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')] ),
        mobile : new FormControl ('',[Validators.required, Validators.minLength(3)]),
        city : new FormControl ('',[Validators.required]),
        subjects: new FormControl('',[Validators.required]),
        class: new FormControl('',[Validators.required]),
      }
    );
  }

  public toInt (num : String) {
    return +num;
  }

  public sortByWordLength = (a : any)=> {
    return a.subjects.length;
  }

  public getfacultyForEdit(faculty:Faculty) {
    console.log(faculty);
    this.myModal.showForModal(faculty);

}
}
