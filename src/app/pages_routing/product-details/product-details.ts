import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ParamMap } from '@angular/router';

@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css',
})

//  implements the ngOninit life cycle hook
export class ProductDetails {
private activatedRoute:ActivatedRoute=inject(ActivatedRoute);
ngOnInit(): void {
  // subcribe the paramMap observable
  this.activatedRoute.paramMap.subscribe(params=>{
const id=params.get('id');
console.log(id);
  })
}

}
