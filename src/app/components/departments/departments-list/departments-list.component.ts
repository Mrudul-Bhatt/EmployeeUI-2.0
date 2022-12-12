import { Component, OnInit } from '@angular/core';
import { Department } from 'src/app/models/department.dto';
import { DepartmentsService } from 'src/app/services/departments.service';

@Component({
  selector: 'app-departments-list',
  templateUrl: './departments-list.component.html',
  styleUrls: ['./departments-list.component.css'],
})
export class DepartmentsListComponent implements OnInit {
  departments: Department[] = [];

  constructor(private departmentsService: DepartmentsService) {}

  ngOnInit(): void {
    this.departmentsService.getAllDepartments().subscribe({
      next: (departments) => {
        console.log(departments);
        this.departments = departments;
      },
      error: (err) => console.log(err),
    });
  }
}
