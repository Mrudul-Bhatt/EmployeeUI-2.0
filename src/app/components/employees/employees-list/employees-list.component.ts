import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeResponse } from 'src/app/models/employee-response.dto';
import { Employee } from 'src/app/models/employee.dto';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css'],
})
export class EmployeesListComponent implements OnInit {
  employees: EmployeeResponse[] = [];
  constructor(
    private employeesService: EmployeesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    var token = localStorage.getItem('token');

    if (!token) {
      this.router.navigate(['/login']);
      return;
    }

    this.employeesService.getAllEmployees().subscribe({
      next: (employees) => {
        console.log(employees);
        this.employees = employees;
      },
      error: (err) => console.log(err),
    });
  }
}
