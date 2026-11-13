import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-bak-account',
  imports: [CommonModule,FormsModule],
  templateUrl: './bak-account.html',
  styleUrl: './bak-account.css',
})
export class BakAccount {

  accountNumber:any;
  accountHolder!:string;
 
  baclance:number=500;

  // deposit(amount:number){
  //     this.baclance=this.baclance+amount;
  // }
  // withdraw(amount:number){
  //     if(this.baclance>500){
  //    let msg:String="insufficient balance";
  //   }
  //   else
  //     this.baclance=this.baclance-amount;
    
  // }
  // displayBalance(){
  //   console.log(this.baclance);
  // }

  
}
