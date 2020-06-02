
import { Observable } from 'rxjs';
import { ICurrentWeather } from '../interfaces';


// Making an interface for the fetched data:
export interface ICurrentWeatherData {
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


// Interface for the WeatherService itself
export interface IWeatherService {
  getCurrentWeather(search: string | number, country?: string) : Observable<ICurrentWeather>
}


