import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Department } from '../models/department.dto';
import { HttpClient } from '@angular/common/http';
import { AddDepartment } from '../models/add-department.dto';

@Injectable({
  providedIn: 'root',
})
export class DepartmentsService {
  constructor(private http: HttpClient) {}

  getAllDepartments(): Observable<Department[]> {
    return this.http.get<Department[]>(
      'https://localhost:7243/api/Departments/GetAllDepartments'
    );
  }

  getDepartmentById(id: string): Observable<Department> {
    return this.http.get<Department>(
      `https://localhost:7243/api/Departments/GetDepartmentById/${id}`
    );
  }

  addDepartment(addDepartmentRequest: AddDepartment): Observable<Department> {
    return this.http.post<Department>(
      'https://localhost:7243/api/Departments/AddDepartment',
      addDepartmentRequest
    );
  }

  updateDepartment(editDepartmentRequest: Department): Observable<Boolean> {
    return this.http.put<Boolean>(
      'https://localhost:7243/api/Departments/UpdateDepartment',
      editDepartmentRequest
    );
  }

  deleteDepartment(id: string): Observable<Boolean> {
    return this.http.delete<Boolean>(
      `https://localhost:7243/api/Departments/DeleteDepartment/${id}`
    );
  }
}
