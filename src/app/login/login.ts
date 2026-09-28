import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  pname:string="";
  uprice:number=0;
  quantity:number=0;
  result:string="";
  amount:number=0;


   getTotal(){
    this.amount=this.uprice*this.quantity;
    this.result=`Total Amount:${this.amount}`;
   }
}
