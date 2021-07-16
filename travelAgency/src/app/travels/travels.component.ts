import { Component, OnInit } from '@angular/core';
import { places } from '../places';

@Component({
  selector: 'app-travels',
  templateUrl: './travels.component.html',
  styleUrls: ['./travels.component.css']
})
export class TravelsComponent implements OnInit {
  places = places;
  constructor() { }

  ngOnInit(): void {
  }

}
