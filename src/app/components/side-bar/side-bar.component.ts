import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css'],
  standalone: true,
  imports: [
    MatSidenavModule,
    MatListModule,
    NgFor
  ]
})
export class SideBarComponent {
  cities = ['Москва', 'Лондон', 'Париж', 'Нью-Йорк'];
}
