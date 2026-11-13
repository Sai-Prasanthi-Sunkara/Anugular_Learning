import { computed, effect, Injectable, Signal, signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  price: WritableSignal<number> = signal(200);
  quantity = signal(2);
  readOnly = this.quantity.asReadonly();
  total = computed(() => {
    return this.price() * this.quantity();
  });
  constructor() {
    effect(() => {
      localStorage.setItem('cartTotal', this.total().toString());
    });
  }
  increaseQuantity() {
    this.quantity.update((q) => q + 1);
  }
  changePrice() {
    this.price.set(300);
  }
  reset() {
    this.price.set(0);
  }
}
