import { Component, input, model, output, signal } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child {

  name=signal<string>('intial name');
  // input()signal: using input signal receive the data from parent to child
  username=input.required<string>();
  // output()signal: using output signal parent notifies the changes in the child component which is avoids the manutal mataince of this process using the ouput()signal
   saved=output<string>();
  onSaved(){
  this.saved.emit('John');// send the emitted value (john) to the parent component when the onSaved() method is called
this.name.set('Jane');  //set the child component name signal value to 'Jane' when the onSaved() method is called
  }
  // model()signal for both sharing the data and update the values in both directions Parent -> <- child 
quantity=model<number>(0);

}
