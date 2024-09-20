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

  constructor(private weatherService: WeatherService) {}

  getWeather() {
    this.weatherService.getCurrentWeather(this.city).subscribe((data) => {
      this.weatherData = data;
    });
  }

  ngOnInit() {
    this.getWeather();  // Загрузка погоды для города по умолчанию при инициализации компонента
  }
}
