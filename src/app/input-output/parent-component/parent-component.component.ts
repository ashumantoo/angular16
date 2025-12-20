import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.css']
})
export class ParentComponentComponent implements AfterViewInit {

  @ViewChild('nameInput') nameInputRef!: ElementRef;
  @ViewChild('moodInput') moodInputRef!: ElementRef;

  data: { name: string; mood: string } = { name: "", mood: "" };

  showGreet = false;

  constructor() { };

  ngAfterViewInit() { }

  onGreet() {
    this.showGreet = true;
    this.data.name = this.nameInputRef.nativeElement.value;
    this.data.mood = this.moodInputRef.nativeElement.value;
  }

  onReset() {
    this.data.name = "";
    this.data.mood = "";
    this.showGreet = false;
  }
}
