import { Component, inject } from '@angular/core';
//  import the router service from the angular router
import { Router } from '@angular/router';
import { routes } from '../../app.routes';
@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  
  // programetic navigation with help of the router service 
  // inject the Router service using the inject function instead of the constructor dependency injection
  private router:Router=inject(Router);

  submit(){
  this.router.navigateByUrl('/pages_routing/home')
  }

  
}
