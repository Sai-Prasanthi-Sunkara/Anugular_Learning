import { Component } from '@angular/core';
import { pipe } from 'rxjs';
import { PerformancePipe } from '../performance-pipe';

@Component({
  selector: 'app-performanceresult',
  imports: [PerformancePipe],
  templateUrl: './performanceresult.html',
  styleUrl: './performanceresult.css',
})
export class Performanceresult {

 employees = [
  { name: "Sai", grade: 1 },
  { name: "Rahul", grade: 2 },
  { name: "Priya", grade: 3 },
  { name: "Anjali", grade: 4 },
  { name: "Kiran", grade: 5 },
  { name: "Arjun", grade: 2 },
  { name: "Divya", grade: 4 },
  { name: "Ravi", grade: 1 }
];
}
