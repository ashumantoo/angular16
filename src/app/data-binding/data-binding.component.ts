import { Component, OnInit } from '@angular/core';


/***************************************************************************************************************
  -> Data Binding:- It is a way to bind the data (variables, array, object etc) defined your typescript code to 
    the your html template vice versa.

  -> There are 4 ways to acheive the data binding in Angular
    1. String interpolation: {{}}
    2. Property Binding    : [property]="data"
    3. Event Binding       : (event)="expression"    (expression = function)
    4. Two Way Binding     : [(ngModel)] = "data" 
 */

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  totalPeopleOnline = 10;
  disableButton = true;
  newPersonName = "Mantoo";

  ngOnInit(): void {
    setTimeout(() => {
      this.disableButton = false;
    }, 2000);
  }

  onNewPersonOnlie() {
    this.totalPeopleOnline += 1;
    this.newPersonName = "";
  }

  onAddNewPerson(event: any) {
    this.newPersonName = event.target.value;
  }
}
