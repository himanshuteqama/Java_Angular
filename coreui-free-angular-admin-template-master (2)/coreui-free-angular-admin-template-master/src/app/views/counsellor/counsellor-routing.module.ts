import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CounsellorComponent } from './counsellor.component';



const routes: Routes = [
  {
    path: '',
    component: CounsellorComponent,
    data: {
      title: 'Counsellor'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CounsellorRoutingModule {}
