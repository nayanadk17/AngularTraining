import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css']
})
export class EmpComponent {
  public empId: number = 54654564;
  public empName: string = "Stephan";
  public empJob: string = "Manager";
  public empSalary: number = 75000;
  public empDep: number = 10;

}
