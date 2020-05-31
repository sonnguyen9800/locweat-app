import { Observable, of } from 'rxjs';
// Import Interface for weather data
import { ICurrentWeather } from '../interfaces';
// Import interfaces from weather.service
import { IWeatherService, ICurrentWeatherData } from './weather.service';

export class WeatherServiceFake implements IWeatherService {

  private fakeWeather: ICurrentWeather = {
    city: 'June',
    country: 'Vyet',
    date: 124254354,
    image: '',
    temperature: 0,
    description: 'light and darkness dragon'
  }


  
  getCurrentWeather(city: string, country: string): Observable<ICurrentWeather> {
    return of(this.fakeWeather);
  }
  

}
