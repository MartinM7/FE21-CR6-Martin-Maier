import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: any = [];
  total: number = 0;
  discountPercentage: number = 0;
  discount: number = 0;

  constructor() { }

  addToCart(place: any) {
    this.items.push(place);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  cartTotal() {
    let total = 0;
    for (const val of this.items) {
      total += val.price
    }
    this.total = total;
    this.cartDiscountPercentage();

    this.discount = (this.discountPercentage / 100) * this.total;
    let sum = this.total - this.discount;
    return sum.toFixed(2);
  }

  cartDiscountPercentage() {
    if (this.total > 500 ) {
      this.discountPercentage = 20;
    } else if (this.total > 200) {
      this.discountPercentage = 10;
    } else {
      this.discountPercentage = 0;
    }
  }

  getDiscountPercentage() {
    return this.discountPercentage;
  }

  getDiscount() {
    return this.discount;
  }
}
