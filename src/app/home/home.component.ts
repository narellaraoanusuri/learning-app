import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  // selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  topicClass:string = 'topicTitle';
  sectionClass:string = 'topicSection';
  blockClass:string = 'blockSection';

  constructor(private gotoEmp:Router){}
  gotoEmployee():void{
    this.gotoEmp.navigate(['/empCmpnt'])
  }
}
