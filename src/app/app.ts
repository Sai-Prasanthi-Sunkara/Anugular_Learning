import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserInfo } from './user-info/user-info';
import { CitiesList } from './cities-list/cities-list';
import { Login } from './login/login';
import { Performanceresult } from './performanceresult/performanceresult';
import { FormValidation } from './form-validation/form-validation';
import { EmployeeRegForm } from './employee-reg-form/employee-reg-form';
import { ProductInfoGetter } from './product-info-getter/product-info-getter';
import { TestComponent } from './test-component/test-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CitiesList, UserInfo, Login, Performanceresult, FormValidation, EmployeeRegForm, ProductInfoGetter, TestComponent,TestComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-project');
}
