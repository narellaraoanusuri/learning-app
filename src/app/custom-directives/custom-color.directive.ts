import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustomColor]'
})
export class CustomColorDirective {

  constructor(ref: ElementRef) {
    ref.nativeElement.style.color = "#bc48be"
   }

}
