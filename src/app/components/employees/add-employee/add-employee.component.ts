import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddEmployee } from 'src/app/models/add-employee.dto';
import { Department } from 'src/app/models/department.dto';
import { Employee } from 'src/app/models/employee.dto';
import { DepartmentsService } from 'src/app/services/departments.service';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css'],
})
export class AddEmployeeComponent implements OnInit {
  constructor(
    private employeesService: EmployeesService,
    private router: Router,
    private departmentsService: DepartmentsService
  ) {}

  availableDepartments: Department[] = [];

  addEmployeeRequest: AddEmployee = {
    employeeName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    departmentId: '',
  };

  ngOnInit(): void {
    var token = localStorage.getItem('token');

    if (!token) {
      this.router.navigate(['/login']);
      return;
    }

    this.departmentsService.getAllDepartments().subscribe({
      next: (departments) => {
        console.log(departments);
        this.availableDepartments = departments;
      },
      error: (err) => console.log(err),
    });
  }

  changeDepartment(event: Event) {
    this.addEmployeeRequest.departmentId = (
      event.target as HTMLSelectElement
    ).value;
    console.log(this.addEmployeeRequest.departmentId);
  }

  addEmployee() {
    console.log(this.addEmployeeRequest);
    this.employeesService.addEmployee(this.addEmployeeRequest).subscribe({
      next: (employee) => {
        console.log(employee);
        this.router.navigate(['employees']);
      },
      error: (err) => console.log(err),
    });
  }
}
