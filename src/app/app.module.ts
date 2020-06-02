import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurrentWeatherComponent } from './current-weather/current-weather.component';

import { WeatherService } from "./weather/WeatherService";

import { HttpClientModule } from '@angular/common/http';

import { MaterialModule } from './material.module';


// Animations and gesture support on mobile devices
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs'

// import Flex-layoutModule:
import { FlexLayoutModule } from '@angular/flex-layout';

// import for form components:
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CitySearchComponent } from './city-search/city-search.component';

@NgModule({
  declarations: [
    AppComponent,
    CurrentWeatherComponent,
    CitySearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,FlexLayoutModule,
    FormsModule, ReactiveFormsModule
  ],
  providers: [
    WeatherService,    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
