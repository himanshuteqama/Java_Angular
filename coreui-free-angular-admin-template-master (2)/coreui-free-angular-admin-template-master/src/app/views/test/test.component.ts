import { Component, OnInit } from '@angular/core';
import { Test } from '../../model/test';
import { DataTable } from 'angular-6-datatable/lib/src/DataTable';
import {Router } from '@angular/router';
import { FormBuilder, FormGroup,FormControl,ReactiveFormsModule, Validators} from '@angular/forms';
import { ModalDirective } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
  providers: [DataTable]
})
export class TestComponent implements OnInit {
  studentform :FormGroup;
  public marksList : any[] = [
    {
     
      "firstName":"Ananya",
      "rollNo" : "A112",
      "subject" : "Physics",
      "marksObtain" : "77",
      "totalMarks" : "100"

    },
    {
      "firstName":"Ruchi",
      "rollNo" : "A114",
      "subject" : "Commerce",
      "marksObtain" : "69",
      "totalMarks" : "100"
    },
    {
      "firstName":"Aniket",
      "rollNo" : "A124",
      "subject" : "English",
      "marksObtain" : "79",
      "totalMarks" : "100"
    },
    {
      "firstName":"Prakash",
      "rollNo" : "A324",
      "subject" : "Chemistry",
      "marksObtain" : "56",
      "totalMarks" : "100"
    }
  ];
  constructor(private formBuilder: FormBuilder, private route : Router) { }

  ngOnInit() {
    this.studentform = this.formBuilder.group(
      {
        firstName : new FormControl ('',[Validators.required]),
        rollNo : new FormControl ('',[Validators.required]),
        date : new FormControl ('', Validators.required),
        subject : new FormControl ('',[Validators.required]),
        marksObtain : new FormControl('',[Validators.required]),
        totalMarks : new FormControl ('', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')] ),
    

      }
    )
  }

}
