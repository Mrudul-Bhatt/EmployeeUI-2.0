import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Department } from 'src/app/models/department.dto';
import { DepartmentsService } from 'src/app/services/departments.service';

@Component({
  selector: 'app-edit-department',
  templateUrl: './edit-department.component.html',
  styleUrls: ['./edit-department.component.css'],
})
export class EditDepartmentComponent implements OnInit {
  editDepartmentRequest: Department = {
    departmentId: '',
    departmentName: '',
  };

  constructor(
    private route: ActivatedRoute,
    private departmentsService: DepartmentsService,
    private router: Router
  ) {}

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
          this.departmentsService.getDepartmentById(id).subscribe({
            next: (department) => {
              this.editDepartmentRequest = department;
            },
            error: (err) => console.log(err),
          });
        }
      },
    });
  }

  editDepartment() {
    this.departmentsService
      .updateDepartment(this.editDepartmentRequest)
      .subscribe({
        next: (isUpdated) => {
          console.log(isUpdated);
          this.router.navigate(['../departments']);
        },
        error: (err) => console.log(err),
      });
  }

  deleteDepartment(id: string) {
    this.departmentsService.deleteDepartment(id).subscribe({
      next: (isDeleted) => {
        console.log(isDeleted);
        this.router.navigate(['../departments']);
      },
      error: (err) => console.log(err),
    });
  }
}
