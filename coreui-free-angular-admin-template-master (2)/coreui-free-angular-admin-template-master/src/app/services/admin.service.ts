import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http, Headers, RequestOptions,Response} from '@angular/http';
// import 'rxjs/add/operator/map';
// import 'rxjs/Rx';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/observable/throw'

import {Admin} from '../model/Admin';
// // import { Observable } from 'rxjs';
// import { HttpResponse } from 'selenium-webdriver/http';


@Injectable({
  providedIn: 'root'
})
export class AdminService {
  adminList :Admin [] = [];

  constructor(private http : HttpClient) { }

addAdmin(admin: Admin) {
  console.log(admin);
  this.adminList.push(admin);
}

editAdmin(admin:Admin) {
  const index = this.adminList.findIndex(a=>a.email === admin.email);
  this.adminList[index] = admin;
}

deleteAdmin (admin: Admin) {
    const adm = this.adminList.findIndex(a => a.email === admin.email);
    this.adminList.splice(adm, 1);
  }

getAllAdmins()
{
  return this.adminList;
}
}







  // public addAdmin(admin: Admin)  {
  //   // return this.http.post( "url" +'addAdmin' , admin);

  //  return this.http.post("url" + 'addAmin' , admin).subscribe(data => {
  //    console.log(data);
  //  });
  // }

  // public getAdmins() {

  //   return this.http.get("url ");
  //   // .map((res: Response) => res.json()).catch(
  //   //   (error: Error) => {
  //   //     return Observable.throw (new Error(error.message))
  //   //   }
  //   // )
  // }

  // public updateAdmin(admin: Admin) {

  //   return this.http.put("url", admin);
  // //  return this.http.put("" , admin).map(
  // //     (res:Response) => {
  // //       console.log(res);
  // //     }
  // //   )
  // //   .catch(
  // //     (error: Error) => {
  // //       return Observable.throw (new Error(error.message))
  // //     }
  // //   )
  // }

  // public deleteAdmin(admin : Admin) {

  //   this.http.delete(" " + 'deleteAdmin' + admin);
  //   // this.http.delete(" " + 'deleteAdmin' + admin).map(
  //   //   (res:Response) => {
  //   //     console.log(res);
  //   //   }
  //   // )
  //   // .catch(
  //   //   (error: Error) => {
  //   //     return Observable.throw (new Error(error.message))
  //   //   }
  //   // )
  // }

  


