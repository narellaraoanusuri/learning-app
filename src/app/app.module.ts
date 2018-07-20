import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { StudentInfoComponent } from './student-info/student-info.component';
import { StudentSalaryDeductPipe } from './student-info/student-salary-deduct.pipe';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    TwoWayBindingComponent,
    StudentInfoComponent,
    StudentSalaryDeductPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
