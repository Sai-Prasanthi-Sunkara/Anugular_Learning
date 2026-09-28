import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cities-list',
  imports: [CommonModule],
  templateUrl: './cities-list.html',
  styleUrl: './cities-list.css',
})
export class CitiesList {
  citiesArray=["Hyd","Pune","Goa","Mumbai"];
}
