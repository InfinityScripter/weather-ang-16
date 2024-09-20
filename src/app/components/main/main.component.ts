import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {WeatherService} from "../../services/weather.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class MainComponent {
  weatherData: any;
  city: string = 'Москва';  // Город по умолчанию
  lastCheckedCities: string[] = [];  // Массив последних проверенных городов

  constructor(private weatherService: WeatherService) {}

  getWeather() {
    this.weatherService.getCurrentWeather(this.city).subscribe((data) => {
      this.weatherData = data;
      this.addCityToHistory(this.city);  // Добавляем город в историю после успешного запроса
    });
  }

  addCityToHistory(city: string) {
    if (!this.lastCheckedCities.includes(city)) {
      this.lastCheckedCities.push(city);
      localStorage.setItem('checkedCities', JSON.stringify(this.lastCheckedCities)); // Сохраняем в localStorage
    }
  }

  loadLastCheckedCities() {
    const cities = localStorage.getItem('checkedCities');
    if (cities) {
      this.lastCheckedCities = JSON.parse(cities);
    }
  }

  ngOnInit() {
    this.loadLastCheckedCities();  // Загружаем историю городов из localStorage при инициализации
    this.getWeather();  // Получаем погоду для города по умолчанию
  }
}
