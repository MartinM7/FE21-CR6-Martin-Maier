import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  cart: any;
  constructor(private CS: CartService) { }

  clearCart() {
    this.CS.clearCart();
  }

  cartTotal() {
    return this.CS.cartTotal();
  }

  ngOnInit(): void {
    this.cart = this.CS.getItems();
  }

}
