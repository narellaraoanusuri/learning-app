import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-info',
  templateUrl: './student-info.component.html',
  styleUrls: ['./student-info.component.css']
})
export class StudentInfoComponent {
  
  studentsData: any[] = [
    {
      id:1,
      name:"aaa",
      dob:"1/1/2016",
      salary:11111
    },
    {
      id:2,
      name:"bbb",
      dob:"2/2/2017",
      salary:22222
    },
    {
      id:3,
      name:"ccc",
      dob:"3/3/2018",
      salary:33333
    }
  ]  
  deductPercent:number=20;
  colValue:number = 5;
  textForNoData:string = "No Data To Display";

}
