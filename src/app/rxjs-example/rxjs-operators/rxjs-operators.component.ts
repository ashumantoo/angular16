import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { filter, from, map, of } from 'rxjs';
import { MasterServiceService } from 'src/app/master-service.service';

@Component({
  selector: 'app-rxjs-operators',
  templateUrl: './rxjs-operators.component.html',
  styleUrls: ['./rxjs-operators.component.css']
})
export class RxjsOperatorsComponent implements OnInit {
  //from operator: emits the data one by one
  numberList = from([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);

  //of operator: emit all the data at once
  numberList2 = of([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);

  searchInputControl = new FormControl();

  constructor(
    private masterService: MasterServiceService
  ) {

    this.searchInputControl.valueChanges.pipe((
      filter((searchText: string) => searchText.length >= 3)
    )).subscribe((result) => {
      console.log("Search query: ", result);
    });



    //logs the number one by one
    this.numberList.subscribe((res) => {
      console.log(res);
    });

    //print only even number using filter operator
    this.numberList.pipe(
      filter(num => num % 2 === 0)
    ).subscribe((result) => {
      console.log("Result: ", result);
    });


    //print only odd numbers from numberList2: since of operator emit the data at once we can not use filter operator here
    //we will use map operator. here map = rxjs operator and filter is Javascript array function
    this.numberList2.pipe(
      map((result) => result.filter((n) => n % 2 !== 0))
    ).subscribe((result) => {
      console.log("Result2: ", result);
    });
  }

  ngOnInit(): void {
    this.masterService.getUsers().subscribe((data) => {
      console.log("Users Data: ", data);
    });


    this.masterService.getUserById("2").subscribe((data) => {
      console.log("Single User data: ", data);
    });
  }
}
