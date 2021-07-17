import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  cart: any;
  constructor(private CS: CartService) { }

  ngOnInit(): void {
    this.cart = this.CS.getItems();
  }

}
