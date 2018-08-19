import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl, FormGroup,ReactiveFormsModule, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { error } from 'util';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.scss']
})
export class AttendanceComponent implements OnInit {

  public myModal;
  attendanceform :FormGroup;
  students : any [];
  constructor(private route : Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.attendanceform = this.formBuilder.group(
      {
        firstName : new FormControl ('',[Validators.required]),
        rollNo : new FormControl ('',[Validators.required]),
        batchName : new FormControl('', [Validators.required,]) ,
        attendance :new FormControl ('',[Validators.required ]),
        date : new FormControl('', [Validators.pattern('dd/mm/yyyy')]),
        subject : new FormControl('',[Validators.required])
      }
    )
  }

}
