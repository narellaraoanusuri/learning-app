import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: "deduct"
})

export class StudentSalaryDeductPipe implements PipeTransform{
    transform(value: number, tax: number){
        tax = tax > 0 ? tax : 10
        return (value) - ((value)*tax/100);
    }
}