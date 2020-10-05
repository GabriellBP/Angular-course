import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url = 'http://asus.com.br';
  asusCourse = true;
  asusHqImage = 'http://tibahia.com/wp-content/uploads/2019/12/asus-hq.jpeg';

  currentValue = "";
  savedValue = "";

  isMouseOver = false;

  name = "asus";

  person = {
    name: 'Gabriel',
    age: 36
  }

  course = 'Angular';

  constructor() { }

  ngOnInit(): void {
  }

  getValue() {
    return 1;
  }

  getLikedCourse() {
    return true;
  }

  clicked() {
    alert('O botão foi clicado.');
  }

  onKeyUp($event) {
    console.log($event.target.value);
    this.currentValue = $event.target.value;
  }

  saveValue(value: any) {
    this.savedValue = value;
  }

  onMouseOut() {
    this.isMouseOver = false;
  }

  onMouseOver() {
    this.isMouseOver = true;
  }
}
