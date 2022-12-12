import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DepartmentsListComponent } from './components/departments/departments-list/departments-list.component';
import { AddDepartmentComponent } from './components/departments/add-department/add-department.component';
import { FormsModule } from '@angular/forms';
import { EditDepartmentComponent } from './components/departments/edit-department/edit-department.component';
import { AddEmployeeComponent } from './components/employees/add-employee/add-employee.component';
import { EmployeesListComponent } from './components/employees/employees-list/employees-list.component';
import { EditEmployeeComponent } from './components/employees/edit-employee/edit-employee.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    DepartmentsListComponent,
    AddDepartmentComponent,
    EditDepartmentComponent,
    AddEmployeeComponent,
    EmployeesListComponent,
    EditEmployeeComponent,
    HomeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
