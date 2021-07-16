import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { places } from '../places';

@Component({
  selector: 'app-travel-details',
  templateUrl: './travel-details.component.html',
  styleUrls: ['./travel-details.component.css']
})
export class TravelDetailsComponent implements OnInit {
  place: any;
  constructor(private route: ActivatedRoute) {

   }

  ngOnInit(): void {
    this.route.paramMap.subscribe(param => {
      let id:number = Number(param.get("id"));
      this.place = places[id]
      
    })
  }

}
