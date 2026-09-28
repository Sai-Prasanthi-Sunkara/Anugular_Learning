import { Component } from '@angular/core';
import {  FormControl, FormGroup, ReactiveFormsModule, Validators, } from '@angular/forms';
import { pattern } from '@angular/forms/signals';

@Component({
  selector: 'app-form-validation',
  imports: [ReactiveFormsModule],
  templateUrl: './form-validation.html',
  styleUrl: './form-validation.css',
})
export class FormValidation {
 patternp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
 
  public customerForm:FormGroup = new FormGroup({
        fname :  new FormControl('', Validators.required),
        lname :  new FormControl('', Validators.required),
        city :  new FormControl('', [Validators.minLength(3), Validators.maxLength(10)]),
        email :  new FormControl('', Validators.email),
        pincode :  new FormControl('', Validators.pattern("\\d{6}")),
       password : new FormControl('', [
  Validators.required,
  Validators.pattern("/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/")
]),

    });


     public submitClick() : void
    {
       // ajax call to send data to server
      alert("Customer Details are registered.");
      console.log(this.customerForm.value);
    }
}
