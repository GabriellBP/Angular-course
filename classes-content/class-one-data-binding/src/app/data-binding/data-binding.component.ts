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

  constructor() { }

  ngOnInit(): void {
  }

  getValue() {
    return 1;
  }

  getLikedCourse() {
    return true;
  }
}
