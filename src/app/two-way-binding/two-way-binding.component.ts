import { Component } from '@angular/core';

@Component({
  // selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.css']
})
export class TwoWayBindingComponent{
  topicClass:string = 'topicTitle';
  sectionClass:string = 'topicSection';
  blockClass:string = 'blockSection';
  inputValue:string = "Anusuri";
  inputChar:string = "";
  inputNextChar:string = "";

  eventHandler(keyCode) {
    console.log(keyCode, String.fromCharCode(keyCode+1));
    //  this.inputChar = String.fromCharCode(keyCode+1));
  
  }
}
