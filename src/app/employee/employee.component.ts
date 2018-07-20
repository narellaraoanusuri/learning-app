import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  colSpanValue:number = 2;
  nameStyle:string = "nameClass";
  hasAnotherClass:boolean = true;
  ageColor:string = "rgb(40, 128, 138)";

  fName:string = "Narella";
  lName:string = "Rao";
  empCode:string = "P0077";
  empAge:string = "25";
  company:string = "Hurix";
  empName():string {
    return this.fName+" "+this.lName;
  }

  buttonText:string = "Show Details";
  isTableDisplayed:boolean = false;

  showTableData(): void{
    this.isTableDisplayed = !this.isTableDisplayed;
    this.buttonText = (this.isTableDisplayed == true) ? "Hide Details" : "Show Details";    
  }

}
