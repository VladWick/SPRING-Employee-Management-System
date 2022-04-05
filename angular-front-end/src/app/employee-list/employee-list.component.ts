import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list', 
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  //employees: Employee[] = [];
  employees: any;
  constructor(private employeeService: EmployeeService,
    private router: Router) { }

  //employees: any;
  //private url1 = "http://localhost:8080/api/v1/employees";
  //constructor(private http:HttpClient ) {}

  ngOnInit(): void {
    this.getEmployees();
    // It works!!!
    //let response = this.http.get("http://localhost:8080/api/v1/employees");
    //response.subscribe(data=>(this.employees=data))

  }

  private getEmployees(){
    this.employeeService.getEmployeesList().subscribe(data => {
      this.employees = data;
    });
  }  

  employeeDetails(id: number){
    this.router.navigate(['employee-details', id]);
  }

  updateEmployee(id: number){
    this.router.navigate(['update-employee', id]);
  }

  deleteEmployee(id: number){
    this.employeeService.deleteEmployee(id).subscribe(data => {
      console.log(data);
      this.getEmployees();
    })
  }
}
