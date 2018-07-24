import { Injectable } from '@angular/core';
import { ServDemoInterface } from './serv-demo-interface'

@Injectable()

export class ServDemoService{
    getStudentDetails(): ServDemoInterface[]{
        return [
            {
              id:4,
              name:"aaa",
              dob:"4/4/2016",
              salary:44444
            },
            {
              id:5,
              name:"bbb",
              dob:"5/5/2017",
              salary:55555
            },
            {
              id:6,
              name:"ccc",
              dob:"6/6/2018",
              salary:66666
            }
        ];
    }
}