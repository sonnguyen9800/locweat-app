import { Component, OnInit } from '@angular/core';


import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-city-search',
  templateUrl: './city-search.component.html',
  styleUrls: ['./city-search.component.css']
})
export class CitySearchComponent implements OnInit {
  search = new FormControl()
  constructor() { }

  ngOnInit(): void {
  }

}
