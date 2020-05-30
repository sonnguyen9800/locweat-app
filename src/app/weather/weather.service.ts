import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { ICurrentWeather } from '../interfaces';
import { map } from 'rxjs/operators';


// Making an interface for the fetched data:
interface ICurrentWeatherData {
  weather: [
    {
      description: string,
      icon: string
    }
  ],
  main: {
    temp: number
  },
  sys: {
    country: string
  },
  dt: number,
  name: string
}



@Injectable({
  providedIn: 'root'
})


export class WeatherService {
  // Inject HttpClient in the constructor
  constructor(private httpClient: HttpClient) {
    
  }

  getCurrentWeather(city: string, country: string) : Observable<ICurrentWeather>{
    let api: string  = environment.baseUrl + environment.websiteUrl + "q=" + city + "," + country +"&appid=" + environment.openWeatherAPI;
    return this.httpClient.get<ICurrentWeatherData>(api).pipe(
      map(data => this.transformToIcurrentWeather(data))
    );
  }

  private transformToIcurrentWeather(data: ICurrentWeatherData) : ICurrentWeather{
    return {
      city: data.name,
      country: data.sys.country,
      date: data.dt * 1000,
      image: `http://openweathermap.org/img/w/${data.weather[0].icon}.png`,
      temperature: this.convertKtoC(data.main.temp),
      description: data.weather[0].description
    }
  }

  
  private convertKtoC(kelvin: number) : number {
    return kelvin - 273.15;
  }
  
}
