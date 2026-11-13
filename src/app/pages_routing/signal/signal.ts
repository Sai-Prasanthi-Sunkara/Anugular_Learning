import { Component, inject } from '@angular/core';
import { CartService } from '../../service/cart-service';
import { Route } from '@angular/router';
import { Products } from '../products/products';
@Component({
  selector: 'app-signal',
  imports: [],
  templateUrl: './signal.html',
  styleUrl: './signal.css',
})
export class Signal {
  cartService = inject(CartService);
}
