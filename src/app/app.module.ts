import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EmployeeComponent } from './employee/employee.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { StudentInfoComponent } from './student-info/student-info.component';
import { StudentSalaryDeductPipe } from './student-info/student-salary-deduct.pipe';
import { PnfComponent } from './misc/pnf.component';
import { CustomColorDirective } from './custom-directives/custom-color.directive';
import { ServDemoComponent } from './service-interface-demo/serv-demo.component';
import { ServSalaryDeductPipe } from './service-interface-demo/serv-salary-deduct.pipe';

const appRoutes: Routes = [
  { path:'homeCmpnt', component:HomeComponent },
  { path:'empCmpnt', component:EmployeeComponent },
  { path:'TwoWayBndgCmpnt', component:TwoWayBindingComponent },
  { path:'StdntInfCmpnt', component:StudentInfoComponent },
  { path:'serviceCmpnt', component:ServDemoComponent },
  // { path:'notLinkedPage', component:ServDemoComponent },
  { path:'', redirectTo:'/homeCmpnt', pathMatch:'full' },
  { path:'**', component:PnfComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,    
    EmployeeComponent,
    TwoWayBindingComponent,
    StudentInfoComponent,
    StudentSalaryDeductPipe,
    PnfComponent,
    CustomColorDirective,
    ServDemoComponent,
    ServSalaryDeductPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
