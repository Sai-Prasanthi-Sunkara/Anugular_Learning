import { CommonModule, NgFor } from '@angular/common';
import { Component} from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-user-info',
  imports: [CommonModule, RouterLink],
  templateUrl: './user-info.html',
  styleUrl: './user-info.css',



})
export class UserInfo {
 uname:string="sai";
 age:number=21;
 isvalid:boolean=true;

 products = [
    { id: 1, name: "Laptop", price: 55000, quantity: 2 },
    { id: 2, name: "Mouse", price: 800, quantity: 5 },
    { id: 3, name: "Keyboard", price: 1500, quantity: 3 }
];
total: number=0;
// calculateTotal() {
constructor(){
    //  total: number = 0;

    for (let index = 0; index < this.products.length; index++) {
      this.total += this.products[index].price *
               this.products[index].quantity;
    }

    console.log(this.total);
    console.log("hi this is for the testing");

}


}
