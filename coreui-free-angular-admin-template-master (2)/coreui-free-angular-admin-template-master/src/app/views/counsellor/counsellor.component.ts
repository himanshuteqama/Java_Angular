import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder,FormControl, FormGroup,ReactiveFormsModule, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { error } from 'util';
import { ModalDirective } from 'ngx-bootstrap/modal';
import {CounsellorService } from '../../services/counsellor.service';
import { Counsellor } from '../../model/Counsellor';
import { CounsellorPopupComponent } from '../../views/counsellor/counsellor.modal'
import { BsModalService } from 'ngx-bootstrap/modal/bs-modal.service';
import { ModalOptions } from 'ngx-bootstrap/modal/modal-options.class';
import { Directive } from '@angular/core/src/metadata/directives';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-counsellor',
  templateUrl: './counsellor.component.html',
  styleUrls: ['./counsellor.component.scss'],
  providers: [CounsellorPopupComponent]
})
export class CounsellorComponent implements OnInit {

  @Input() formControl: FormControl;
  @ViewChild(CounsellorPopupComponent)  myModal : CounsellorPopupComponent;
  errorMsg : String;
  counsellorform :FormGroup;
  public counsellors : any[] = [
    {
      "firstname":"Ananya",
      "lastname":"Shukla",
      "email":"ananya@gmail.com",
      "mobile":"9900876777",
    },
    {
      "firstname":"Vivek",
      "lastname":"Singh",
      "email":"vivek@gmail.com",
      "mobile":"9989675644",

    },
    {
      "firstname":"Harshi",
      "lastname":"Agarwal",
      "email":"harshit@gmail.com",
      "mobile":"9123456789",
    }
  ];

  private counsellor : Counsellor
  constructor(private modalService: BsModalService, private route : Router, private formBuilder: FormBuilder, private service :CounsellorService) { 
    this.initializeErrors();
  }

  ngOnInit() {

    this.counsellorform = this.formBuilder.group(
      {
        firstName : new FormControl ('',[Validators.required]),
        lastName : new FormControl ('',[Validators.required]),
        email : new FormControl('', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]) ,
        mobile :new FormControl ('',[Validators.required ]),
      }
    )

  }

  initializeErrors() {
    this.errorMsg = "Fields value is not entered properly";
  }

  getCounsellor(){
  this.service.getAllCouns();
   }

   createCounsellor()
   {
     this.service.addCouns(this.counsellorform.value);
   }

   public getCounsellorForEdit(counsellor: Counsellor) {
    console.log(counsellor);
    this.myModal.showForModal(counsellor);

}
}
