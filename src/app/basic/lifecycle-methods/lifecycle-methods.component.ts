import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lifecycle-methods',
  templateUrl: './lifecycle-methods.component.html',
  styleUrls: ['./lifecycle-methods.component.css']
})
export class LifecycleMethodsComponent implements OnInit, OnChanges, DoCheck, AfterViewInit, AfterViewChecked, AfterContentInit, AfterContentChecked, OnDestroy {
  name = "Ashutosh";
  username = "";
  shouldShow = false;
  constructor() {
    console.log("Constructor called....");
  }

  ngOnInit(): void {
    console.log("NgOnInit called...")
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("NgOnChanges called....", changes);
  }

  ngDoCheck(): void {
    console.log("NgDoCheck called...")
  }

  ngAfterViewInit(): void {
    console.log("NgAfterViewInit called...")
  }

  ngAfterViewChecked(): void {
    console.log("NgAfterViewChecked called...")
  }

  ngAfterContentInit(): void {
    console.log("NgAfterContentInit called...")
  }

  ngAfterContentChecked(): void {
    console.log("NgAfterContentCheck called...")
  }

  ngOnDestroy(): void {
    console.log("NgOnDestroy called...")
  }

  showName() {
    this.shouldShow = true;
  }
}
