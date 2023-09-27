import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IWeather} from "../interfaces/weather";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  // Для тестового пойдет и такое хранение
  private token= 'c69ed42df3a042ec8cb82112232709'

  constructor(private http: HttpClient) {}

  getWeather(city: string, date: string): Observable<IWeather> {
    return this.http.get<IWeather>(`http://api.weatherapi.com/v1/history.json?key=${this.token}&q=${city}&dt=${date}`);
  }
}
