import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'Samples Development';
  topicClass:string = 'topicTitle';
  sectionClass:string = 'topicSection';
  blockClass:string = 'blockSection';
}
