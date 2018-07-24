import { Component } from '@angular/core';
import { ServDemoService } from './serv-demo.service';
import { ServDemoInterface } from './serv-demo-interface'

@Component({
  // selector: 'app-student-info',
  templateUrl: './serv-demo.component.html',
  styleUrls: ['./serv-demo.component.css'],
  providers: [ServDemoService]
})
export class ServDemoComponent {
  topicClass:string = 'topicTitle';
  sectionClass:string = 'topicSection';
  blockClass:string = 'blockSection';

  deductPercent:number=20;
  colValue:number = 5;
  textForNoData:string = "No Data To Display";

  studentsData: ServDemoInterface[] = null;
  constructor(private studentService: ServDemoService){
    this.studentsData = this.studentService.getStudentDetails();
  }
}
