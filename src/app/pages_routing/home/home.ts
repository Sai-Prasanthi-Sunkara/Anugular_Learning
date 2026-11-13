import { Component, inject, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink, RouterLinkActive,RouterOutlet],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
// implemnts OnInit (life cycle hook)
export class Home{

  // programetic navigation with help of the router service 
  // inject the Router service using the inject function instead of the constructor dependency injection


  private router:Router=inject(Router);
  login(){
     // programetic navigation usig through the navigate() method
    this.router.navigate(['/pages_routing/login']);

  }
  register(){
     // programetic navigation usig through the navigateByUrl() method
this.router.navigateByUrl('/pages_routing/register');
}

 // programetic navigation usig through the navigateByUrl() method including the route parameters
view(product_id:number){
  this.router.navigateByUrl('/pages_routing/product-details/'+ product_id); //here the navigateByUrl expects the string so that we are using the "+" contactinating the id
  console.log(product_id)
}
views(category:string,sort_price:string){
  this.router.navigate(["/pages_routing/products"],{queryParams:{category:category,sort:sort_price}});
}
}
