import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Department } from 'src/app/models/department.dto';
import { EditEmployee } from 'src/app/models/edit-employee.dto';
import { DepartmentsService } from 'src/app/services/departments.service';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css'],
})
export class EditEmployeeComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private employeesService: EmployeesService,
    private departmentsService: DepartmentsService,
    private router: Router
  ) {}

  availableDepartments: Department[] = [];

  editEmployeeRequest: EditEmployee = {
    employeeId: '',
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

    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');

        if (id) {
          this.employeesService.getEmployeeById(id).subscribe({
            next: (employee) => {
              this.editEmployeeRequest.employeeName = employee.employeeName;
              this.editEmployeeRequest.dateOfBirth = employee.dateOfBirth;
              this.editEmployeeRequest.email = employee.email;
              this.editEmployeeRequest.phone = employee.phone;
              this.editEmployeeRequest.departmentId = employee.departmentId;
              this.editEmployeeRequest.employeeId = employee.employeeId;
            },
            error: (err) => console.log(err),
          });
        }
      },
    });

    this.departmentsService.getAllDepartments().subscribe({
      next: (departments) => {
        console.log(departments);
        this.availableDepartments = departments;
      },
      error: (err) => console.log(err),
    });
  }

  changeDepartment(event: Event) {
    this.editEmployeeRequest.departmentId = (
      event.target as HTMLSelectElement
    ).value;
    console.log(this.editEmployeeRequest.departmentId);
  }

  editEmployee() {
    this.employeesService.updateEmployee(this.editEmployeeRequest).subscribe({
      next: (isUpdated) => {
        console.log(isUpdated);
        this.router.navigate(['../employees']);
      },
      error: (err) => console.log(err),
    });
  }

  deleteEmployee(id: string) {
    this.employeesService.deleteEmployee(id).subscribe({
      next: (isDeleted) => {
        console.log(isDeleted);
        this.router.navigate(['../employees']);
      },
      error: (err) => console.log(err),
    });
  }
}
