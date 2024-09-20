import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private http = inject(HttpClient);

  private apiKey = '06f7b381d6c423fbf50e4ef90a2cb4a2';
  private apiUrl = 'https://api.openweathermap.org/data/2.5';

  // Получение текущей погоды по названию города
  getCurrentWeather(city: string): Observable<any> {
    const url = `${this.apiUrl}/weather?q=${city}&units=metric&lang=ru&appid=${this.apiKey}`;
    return this.http.get(url);
  }

  // Получение прогноза погоды на несколько дней
  getWeatherForecast(city: string): Observable<any> {
    const url = `${this.apiUrl}/forecast?q=${city}&units=metric&lang=ru&appid=${this.apiKey}`;
    return this.http.get(url);
  }
}
