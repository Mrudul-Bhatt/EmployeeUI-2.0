import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee.dto';
import { AddEmployee } from '../models/add-employee.dto';
import { EmployeeResponse } from '../models/employee-response.dto';
import { EditEmployee } from '../models/edit-employee.dto';

@Injectable({
  providedIn: 'root',
})
export class EmployeesService {
  constructor(private http: HttpClient) {}

  getAllEmployees(): Observable<EmployeeResponse[]> {
    return this.http.get<EmployeeResponse[]>(
      'https://localhost:7243/api/Employees/GetAllEmployees'
    );
  }

  getEmployeeById(id: string): Observable<EmployeeResponse> {
    return this.http.get<EmployeeResponse>(
      `https://localhost:7243/api/Employees/GetEmployeeById/${id}`
    );
  }

  addEmployee(addEmployeeRequest: AddEmployee): Observable<EmployeeResponse> {
    return this.http.post<EmployeeResponse>(
      'https://localhost:7243/api/Employees/AddEmployee',
      addEmployeeRequest
    );
  }

  updateEmployee(editEmployeeRequest: EditEmployee): Observable<Boolean> {
    return this.http.put<Boolean>(
      'https://localhost:7243/api/Employees/UpdateEmployee',
      editEmployeeRequest
    );
  }

  deleteEmployee(id: string): Observable<Boolean> {
    return this.http.delete<Boolean>(
      `https://localhost:7243/api/Employees/DeleteEmployee/${id}`
    );
  }
}
