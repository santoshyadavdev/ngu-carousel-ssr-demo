import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeeComponent } from './employee.component';
import { EmpdetailsComponent } from './empdetails/empdetails.component';

const routes: Routes = [
  { path: '', component: EmployeeComponent },
  { path: ':id', component: EmpdetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
