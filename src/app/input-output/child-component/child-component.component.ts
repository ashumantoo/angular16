import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit {
  @Input() greetingData: { name: string; mood: string } = { name: "", mood: "" };

  @Output() resetGreetingData = new EventEmitter();

  ngOnInit(): void {}

  onClear() {
    this.resetGreetingData.emit();
  }
}
