import { Injectable } from '@angular/core';
import {Counsellor} from '../model/Counsellor';
// import { Http, Headers, RequestOptions,Response} from '@angular/http';
// import { HttpClient } from '@angular/common/http';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/observable/throw';
@Injectable({
  providedIn: 'root'
})
export class CounsellorService {

  counsellors :Counsellor [] = [];


  constructor() { }

  addCouns(couns: Counsellor) {
    console.log(couns);
    return this.counsellors.push(couns)
  }
  
  editCouns(couns:Counsellor) {
    const index = this.counsellors.findIndex(c=>c.email === couns.email);
    return this.counsellors[index] = couns;
  }
  
  deleteCouns (couns: Counsellor) {
      const cons = this.counsellors.findIndex(c => c.email === couns.email);
     return this.counsellors.splice(cons, 1);
    }
  
  getAllCouns()
  {
    return this.counsellors;
  }
}
