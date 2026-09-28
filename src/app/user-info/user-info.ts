import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-user-info',
  imports: [CommonModule],
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

}
