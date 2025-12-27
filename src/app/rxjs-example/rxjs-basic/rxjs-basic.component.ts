import { Component, OnDestroy } from '@angular/core';
import { from, interval, Observable, of, timer } from 'rxjs';

@Component({
  selector: 'app-rxjs-basic',
  templateUrl: './rxjs-basic.component.html',
  styleUrls: ['./rxjs-basic.component.css']
})
export class RxJSBasicComponent implements OnDestroy {

  cities = ["Noida", "Delhi", "Pune", "Bangalore", "Mumbai"]; //Normal variable - Not observable

  //states observable - using 'of' from RxJS to create this observable which can be subscribed 
  //'of' function/operator will give the result at once.
  states = of(["Bihar", "Karntaka", "Maharastra", "Utter Prades"]);

  //creating states observable using 'from' method - this will give result one by one
  newStates = from(["Bihar", "Karntaka", "Maharastra", "Utter Prades"]);

  myInterval = interval(2000) //2s

  //Time runs only once and stops but interval keeps on running on the interval of mentioned duration
  myTimer = timer(5000) //5s

  /*
   => setTimeout from javascript, it doesn't gurantee you that it will always run, it way doesn't run after 15-20 intervals
   => interval from RxJS - it alwasy gurantee you that it will be run on every mentioned interval
  */


  constructor() {

    this.states.subscribe((state) => {
      console.log("State: ", state);
    });

    this.newStates.subscribe((_state) => {
      console.log("_State:", _state);
    });

    //this myInterval will keep on running on every 2s
    // this.myInterval.subscribe((result) => {
    //   console.log("Interval: ", result);
    // });

    this.myTimer.subscribe((result) => {
      console.log("Timer: ", result);
    });

    //Creating customer observable
    const customerObservable = new Observable(message => {
      message.next("This is a demo text");
    });

    customerObservable.subscribe((result) => {
      console.log(result);
    });
  }

  ngOnDestroy(): void {
  
  }
}
