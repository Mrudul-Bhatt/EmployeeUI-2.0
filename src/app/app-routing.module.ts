import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDepartmentComponent } from './components/departments/add-department/add-department.component';
import { DepartmentsListComponent } from './components/departments/departments-list/departments-list.component';
import { EditDepartmentComponent } from './components/departments/edit-department/edit-department.component';
import { AddEmployeeComponent } from './components/employees/add-employee/add-employee.component';
import { EditEmployeeComponent } from './components/employees/edit-employee/edit-employee.component';
import { EmployeesListComponent } from './components/employees/employees-list/employees-list.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'departments',
    component: DepartmentsListComponent,
  },
  {
    path: 'add-department',
    component: AddDepartmentComponent,
  },
  {
    path: 'edit-department/:id',
    component: EditDepartmentComponent,
  },
  {
    path: 'employees',
    component: EmployeesListComponent,
  },
  {
    path: 'add-employee',
    component: AddEmployeeComponent,
  },
  {
    path: 'edit-employee/:id',
    component: EditEmployeeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
