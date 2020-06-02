import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';

import { Observable } from 'rxjs';

// Import Interface for weather data
import { ICurrentWeather } from '../interfaces';
import { map } from 'rxjs/operators';


// Import interfaces from weather.service
import { IWeatherService, ICurrentWeatherData } from './weather.service';


// Import Subject from 'rxjs' for sibling interactions
import { BehaviorSubject } from 'rxjs';


@Injectable({
    providedIn: 'root'
})

export class WeatherService implements IWeatherService {
  
  // Expose current Weather
  currentWeather = new  BehaviorSubject<ICurrentWeather>({
    city: 'Unknown City',
    country: 'Unknown Country',
    date: Date.now(),
    image: '',
    temperature: 0,
    description: '',
  })
  
  // Inject HttpClient in the constructor

  constructor(private httpClient: HttpClient) {
    }

  getCurrentWeatherHelper(uriParams: string): Observable<ICurrentWeather> {
        let api: string = environment.baseUrl + environment.websiteUrl + uriParams + "&appid=" + environment.openWeatherAPI;
        return this.httpClient.get<ICurrentWeatherData>(api).pipe(
            map(data => this.transformToIcurrentWeather(data))
        );
    }

  
  getCurrentWeather(search: string | number, country?: string): Observable<ICurrentWeather> {
    let uriParams = ''
    if (typeof search === 'string') {
      uriParams = `q=${search}`
    } else {
      uriParams = `zip=${search}`
    }
    if (country) {
      uriParams = `${uriParams},${country}`
    }
    return this.getCurrentWeatherHelper(uriParams)
  }

  getCurrentWeatherByCoords(coords: Coordinates): Observable<ICurrentWeather> {
    const uriParams =
      `lat=${coords.latitude}&lon=${coords.longitude}`
    return this.getCurrentWeatherHelper(uriParams)
  }
  

  

    private transformToIcurrentWeather(data: ICurrentWeatherData): ICurrentWeather {
        return {
            city: data.name,
            country: data.sys.country,
            date: data.dt * 1000,
            image: `http://openweathermap.org/img/w/${data.weather[0].icon}.png`,
            temperature: this.convertKtoC(data.main.temp),
            description: data.weather[0].description
        };
    }




    private convertKtoC(kelvin: number): number {
        return kelvin - 273.15;
    }

}
