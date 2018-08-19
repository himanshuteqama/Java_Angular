import { Component,Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl,ReactiveFormsModule, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { error } from 'util';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { Admin } from '../../model/Admin';
import { AdminService } from '../../services/admin.service';
import { AdminlistComponent } from '../../../../coreui-free-angular-admin-template-master/src/app/components/adminlist/adminlist.component';
import { BsModalService } from 'ngx-bootstrap/modal/bs-modal.service';
import { ModalOptions } from 'ngx-bootstrap/modal/modal-options.class';
import { AdminPopupComponent } from './admin.modal';
import { Directive } from '@angular/core/src/metadata/directives';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  providers: [AdminPopupComponent]
})
export class AdminComponent implements OnInit {
  @Input() formControl: FormControl;
  private admin : Admin;
  // public myModal: AdminPopupComponent;
  errorMsg : String;
  adminform :FormGroup;
  isauthentication: boolean = true;
  isSubmitted: boolean = false;
  adminmail: String = "admin@gmail.com";
  @ViewChild(AdminPopupComponent)  myModal : AdminPopupComponent;
  public admins : any[] = [
    {
      "firstname":"Brijesh",
      "lastname":"Shukla",
      "email":"briju@gmail.com",
      "mobile":"9900876777",
    },
    {
      "firstname":"Mahesh",
      "lastname":"Singh",
      "email":"singh@gmail.com",
      "mobile":"9989675644",

    },
    {
      "firstname":"Aparna",
      "lastname":"Agarwal",
      "email":"aparna@gmail.com",
      "mobile":"9123456789",
    }
  ];
  constructor(private modalService: BsModalService, private route : Router, private formBuilder: FormBuilder, private service :AdminService) { }

  ngOnInit() {
    this.admin = new Admin();
    this.admin.email = "himsaxena.saxena1@gmail.com";
    this.admin.firstname = "Himanshu";
    this.admin.lastname = "Saxena";
    this.admin.mobile = "8896123456";
    this.adminform = this.formBuilder.group(
      {
        firstname : new FormControl ('',[Validators.required]),
        lastname :  new FormControl ('',[Validators.required]),
        email : new FormControl('', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')] ),
        mobile : new FormControl ('',[Validators.required, Validators.minLength(10)]),
      }
    )
  }

  createAdmin()
  {
    console.log("Hi Admin")

    if(this.adminform.value.email == this.adminmail ){
      this.isauthentication = false;
    }else{
      this.service.addAdmin(this.adminform.value);
      this.isSubmitted = true;
  }
}

  getAdmins() {
    this.service.getAllAdmins();
  }

  updateAdmin() {
 this.service.editAdmin(this.adminform.value.email);
  }

  deleteOne() {
    this.service.deleteAdmin(this.adminform.value.email);
  }

  public getAdminForEdit(admin: Admin) {
    console.log(admin);
    this.myModal.showForModal(admin);
    // this.myModal.
  //  this.modalService.show(this.myModal, {});
  }
  

}
