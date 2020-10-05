import {Component, Input, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'counter',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {

  @Input()
  count = 0;

  @Output()
  countChanged = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  add() {
    this.count++;
    this.countChanged.emit({count: this.count});
  }

  subtract() {
    this.count--;
    this.countChanged.emit({count: this.count});
  }
}
