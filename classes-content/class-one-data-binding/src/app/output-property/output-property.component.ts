import {Component, Input, OnInit, EventEmitter, Output, ViewChild, ElementRef} from '@angular/core';

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

  @ViewChild('inputField')
  inputField: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  add() {
    console.log(this.inputField.nativeElement.value);
    this.inputField.nativeElement.value++;
    this.countChanged.emit({count: this.count});
  }

  subtract() {
    this.inputField.nativeElement.value--;
    this.countChanged.emit({count: this.count});
  }
}
