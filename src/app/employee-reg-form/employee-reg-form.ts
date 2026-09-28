import { Component } from '@angular/core';
import { ReactiveFormsModule,FormControl, FormGroup, Validators } from '@angular/forms';
// import { email,  } from '@angular/forms/signals';

@Component({
  selector: 'app-employee-reg-form',
  imports: [ReactiveFormsModule],
  templateUrl: './employee-reg-form.html',
  styleUrl: './employee-reg-form.css',
})
export class EmployeeRegForm {
//petternp=/[a-z0-9\._%+!$&*=^|~#%'`?{}/\-]+@([a-z0-9\-]+\.){1,}([a-z]{2,16})/;

  public employeeForm:FormGroup=new FormGroup({
    empid: new FormControl("",Validators.required),
    empname: new FormControl("",[Validators.required,Validators.minLength(3)]),
    email: new FormControl("",[Validators.required,Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]),
    department: new FormControl("",Validators.required),
    salary: new FormControl("",[Validators.required,Validators.min(10000)]),
    joiningdate: new FormControl("",Validators.required),
    gender: new FormControl("",Validators.required),
    address:new FormControl("",Validators.required),
  });



   public submitFunction() : void
    {
       // ajax call to send data to server
      alert("Employee Details are registered.");
      console.log(this.employeeForm.value);
    }
}
