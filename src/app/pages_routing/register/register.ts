import { Component, inject } from '@angular/core';
//  import the router service from the angular router
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  imports: [],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  
  // programetic navigation with help of the router service 
  // inject the Router service using the inject function instead of the constructor dependency injection
  private router:Router=inject(Router);
  submit(){
    this.router.navigate(['/pages_routing/home'])
  }

}
