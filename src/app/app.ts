import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { UserInfo } from './user-info/user-info';
import { CitiesList } from './cities-list/cities-list';

import { Performanceresult } from './performanceresult/performanceresult';
import { FormValidation } from './form-validation/form-validation';
import { EmployeeRegForm } from './employee-reg-form/employee-reg-form';
import { ProductInfoGetter } from './product-info-getter/product-info-getter';
import { TestComponent } from './test-component/test-component';
import { BakAccount } from './bak-account/bak-account';
import { Home } from './pages_routing/home/home';
import { About } from './pages_routing/about/about';
import { Products } from './pages_routing/products/products';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UserInfo, RouterLink, RouterLinkActive, Home, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('my-project');
  ngif = false;
  array = { laptop: 124, ipad: 'tab' };
  arr = Object.entries(this.array);
  isActive = false;
  textColor = 'blue';
  status = 'inactive';
  role = 'admin';

  arr1 = ['tittle', 'small', true];

  price = 500;
  quantity = 2;
  name: string | undefined | null = undefined;
  msg = '';
  // click event show msg
  showMsg(e: Event) {
    console.log(e.target);
    const value = e.target;
    console.log(e);
    this.msg = 'welcome to the show';
  }
  showMethod(e: Event): void {
    const value = (e.target as HTMLInputElement).value;
    console.log(value);
  }
  pressedKey(e: KeyboardEvent) {
    console.log(e.key);
  }
  search() {
    console.log('Enter button was pressed');
  }
}
// , CitiesList, UserInfo, Login, Performanceresult, FormValidation, EmployeeRegForm, ProductInfoGetter, TestComponent,TestComponent,BakAccount,Home,About,Products
