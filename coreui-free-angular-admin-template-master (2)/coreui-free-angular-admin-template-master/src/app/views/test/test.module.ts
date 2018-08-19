import { NgModule } from '@angular/core';
import { ModalModule } from 'ngx-bootstrap/modal/modal.module';
import { AlertModule } from 'ngx-bootstrap/alert';
import { CommonModule } from "@angular/common";
import { FormsModule,ReactiveFormsModule, FormControl } from '@angular/forms';
import { TestComponent } from './test.component';
import { TestRoutingModule } from './test-routing.module';
import { DataTableModule } from 'angular-6-datatable';

@NgModule({
  imports: [
    TestRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    AlertModule.forRoot(),
    DataTableModule
  ],
  declarations: [ TestComponent ]
})
export class TestModule { }
