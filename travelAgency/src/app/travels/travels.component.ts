import { Component, OnInit } from '@angular/core';
import { places } from '../places';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-travels',
  templateUrl: './travels.component.html',
  styleUrls: ['./travels.component.css']
})
export class TravelsComponent implements OnInit {
  places = places;
  place: any;
  constructor(private CS: CartService) { }

  addToCart(place: any) {
    let items = this.CS.getItems();
    if (items.find((val: any)=> val.name == place.name)) {
      alert('Item is already in your cart!');
    } else {
      alert('Added to your Cart');
      this.CS.addToCart(place);
      console.log(this.CS.getItems());
    }
  }

  ngOnInit(): void {
  }

}
