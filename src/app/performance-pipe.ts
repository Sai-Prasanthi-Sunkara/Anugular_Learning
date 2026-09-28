import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'performance',
})
export class PerformancePipe implements PipeTransform {
  transform(grade: number): string {
    if(grade===1)
      return "Excellent";
    else if(grade===2)
    return "Very Good";
   else if(grade===3)
    return "Good";
   else if(grade===4)
    return "Average";
   else if(grade===5)
    return "BelowAverage";
  else 
    return "Invalid grade";
  }
  
}

