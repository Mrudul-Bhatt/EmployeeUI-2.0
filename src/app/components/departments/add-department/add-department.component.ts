import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddDepartment } from 'src/app/models/add-department.dto';
import { Department } from 'src/app/models/department.dto';
import { DepartmentsService } from 'src/app/services/departments.service';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.css'],
})
export class AddDepartmentComponent implements OnInit {
  addDepartmentRequest: AddDepartment = {
    departmentName: '',
  };

  constructor(
    private departmentsService: DepartmentsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    var token = localStorage.getItem('token');

    if (!token) {
      this.router.navigate(['/login']);
      return;
    }
  }

  addDepartment() {
    console.log(this.addDepartmentRequest);
    this.departmentsService.addDepartment(this.addDepartmentRequest).subscribe({
      next: (department) => {
        console.log(department);
        this.router.navigate(['departments']);
      },
      error: (err) => console.log(err),
    });
  }
}
