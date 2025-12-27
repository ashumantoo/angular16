import { ResourceLoader } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ReplaySubject, Subject } from 'rxjs';
import { MasterServiceService } from 'src/app/master-service.service';

@Component({
  selector: 'app-rxjs-subjects',
  templateUrl: './rxjs-subjects.component.html',
  styleUrls: ['./rxjs-subjects.component.css']
})
export class RxjsSubjectsComponent implements OnInit {
  studentName$ = new Subject();

  rollNo$ = new Subject<number>();

  takeTill$ = new Subject<void>();

  courseName$: Subject<string> = new Subject<string>();

  // initSubject$ = new Subject("ABC") -> This is not allowed, passing the initial value with Subject

  roleFormControle = new FormControl();

  constructor(
    private masterService: MasterServiceService
  ) {
    setTimeout(() => {
      //Emitting the new value from this Subject.
      //If we define a Subject or Behaviour Subject inside a service then we can emit the data using that
      //Subject or Behaviour Subject from any compooent and can listen by subscripting to any component throughout the app.
      this.studentName$.next("Devesh");
      this.rollNo$.next(123);
      this.takeTill$.next();
      this.courseName$.next("NodeJs 22");
    }, 2000);
  }

  ngOnInit(): void {
    this.courseName$.subscribe((result) => {
      console.log("Course Name: ", result);
    });

    this.studentName$.subscribe((result) => {
      console.log("Student Name: ", result);
    })
  }

  onRoleSelect() {
    console.log("event: ", this.roleFormControle.value);
    this.masterService.userRole.next(this.roleFormControle.value);
  }
}
