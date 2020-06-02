import { Component, OnInit } from '@angular/core';

// FormControl and Validators
import { FormControl, Validators } from '@angular/forms';
import { WeatherService } from '../weather/WeatherService';


import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-city-search',
  templateUrl: './city-search.component.html',
  styleUrls: ['./city-search.component.css']
})
export class CitySearchComponent implements OnInit {
  search = new FormControl('', [Validators.minLength(2)])
  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.search.valueChanges.pipe(debounceTime(2000)).subscribe((searchValue: string )=>{

      // Check if the input is valid
      if (!this.search.invalid){
	const userInput = searchValue.split(',').map(s => s.trim());
	
	this.weatherService.getCurrentWeather(
	  userInput[0],
	  userInput.length > 1 ? userInput[1] : undefined
	).subscribe(data => this.weatherService.currentWeather.next(data));
	
      }
    });
  }

  getErrorMessage(): string {
    return this.search.hasError('minlength') ? "Type more than one character to search" : '';
  }
}
