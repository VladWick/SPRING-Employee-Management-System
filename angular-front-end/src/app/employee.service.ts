import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Employee } from './employee';
import { NumberValueAccessor } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseURL;

  constructor(private httpClient: HttpClient) {
    this.baseURL="http://localhost:8080/api/v1/employees";
  }

  getEmployeesList(): Observable<Employee[]>{
    //Both works
    //return this.httpClient.get<Employee[]>(`${this.baseURL}`);
    return this.httpClient.get<Employee[]>(this.baseURL);
  }

  createEmployee(employee: Employee): Observable<any>{
    return this.httpClient.post(`${this.baseURL}`, employee);
  } 

  getEmployeeById(id: number): Observable<Employee>{
    return this.httpClient.get<Employee>(`${this.baseURL}/${id}`);
  }

  updatedEmployee(id: number, employee: Employee){
    return this.httpClient.put(`${this.baseURL}/${id}`, employee);
  }

  deleteEmployee(id: number): Observable<any> {
    return this.httpClient.delete(`${this.baseURL}/${id}`)
  }

}
