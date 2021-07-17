import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { places } from '../places';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-travel-details',
  templateUrl: './travel-details.component.html',
  styleUrls: ['./travel-details.component.css']
})
export class TravelDetailsComponent implements OnInit {
  place: any;
  constructor(private route: ActivatedRoute, private CS: CartService) {

  }

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
    this.route.paramMap.subscribe(param => {
      let id:number = Number(param.get("id"));
      this.place = places[id]
      
    })
  }

}
