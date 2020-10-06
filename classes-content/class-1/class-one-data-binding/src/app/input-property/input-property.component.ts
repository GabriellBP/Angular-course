import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'asus-course-component',
  templateUrl: './input-property.component.html',
  styleUrls: ['./input-property.component.css']
})
export class InputPropertyComponent implements OnInit {

  @Input()
  courseName = '';

  constructor() { }

  ngOnInit(): void {
  }

}
