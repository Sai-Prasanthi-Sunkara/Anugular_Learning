import { Component, model } from '@angular/core';
import { Child } from '../child/child';
import { ViewChild } from '@angular/core';
@Component({
  selector: 'app-parent',
  imports: [Child],
  templateUrl: './parent.html',
  styleUrl: './parent.css',
})
export class Parent {
  // send data to child
userName_parent:string='Sai';
// receive data from child and notifies the child componet chnges using the ouput()signal which is avoids the manutal mataince of this process using the ouput()signal

onChildDataSaved_parent(data: string) {
  console.log('Parent Notifies the child componetnt changes  And Data received from child:', data);
}
// model for both sharing the data and update the values in both directions Parent -> <- child (also need to create in parent component too)
quantity_parent = model(0);

childComponent=ViewChild(Child); // reference to the child component instance
resetChildMsg() {
  this.childComponent?.reset();
}
showChildMsg() {
  this.childComponent?.showMsg();
}
}