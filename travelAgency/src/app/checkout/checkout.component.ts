import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  cart: any;
  discountPercentage: any;
  discount: any;
  total: any;
  constructor(private CS: CartService) { }

  clearCart() {
    this.CS.clearCart();
  }

  ngOnInit(): void {
    this.cart = this.CS.getItems();
    this.total = this.CS.cartTotal();
    this.discountPercentage = this.CS.getDiscountPercentage();
    this.discount = this.CS.getDiscount();
  }

  
}
