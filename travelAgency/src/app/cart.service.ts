import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items : any = [];
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

    return total;
  }


//   function Total() {
//     let total = 0;
//     for (let val of cart) {
//         total = total + (val.price * val.qtty);
//     }
//     document.getElementById("price").innerHTML = total.toFixed(2) + " €";
// }
}
