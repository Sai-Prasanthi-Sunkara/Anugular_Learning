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

  // common service data for sharing the data between the different components
  private _sharedData: WritableSignal<string> = signal('Shared data Between the different components'); // private writable signal to hold the shared data
  // readonly value=this._sharedData.asReadonly
  as_Read_Only= this._sharedData.asReadonly(); // public readonly signal to expose the shared data
  // get sharedData() {
  //   return this._sharedData;
  // }
}
