import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-product-info-getter',
  imports: [CommonModule],
  templateUrl: './product-info-getter.html',
  styleUrl: './product-info-getter.css',
})
export class ProductInfoGetter {

  data:any[]=[];


  //  dependencey injection Inject the HttpClient class in the componet using the object 
  constructor(private httpClientobj:HttpClient){}

  // http://jnsplaceholder.typicode.com/users  https://localhost:7262/api/Product

  buttonClick():void{
    let API_URL="http://jsonplaceholder.typicode.com/users";

    this.httpClientobj.get(API_URL).subscribe((resData:any)=>{
      this.data=resData;
      console.log(this.data);
      // this.cdr
    });
  }

}
