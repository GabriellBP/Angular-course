import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {

  title = "";

  constructor(private route: ActivatedRoute, private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        let child = this.route.firstChild;
        let parent = this.route;
        while (child != null) {
          parent = child;
          child = child.firstChild;
        }
        this.title = parent.snapshot.data['name'];
      }
    })
  }

  ngOnInit(): void {

  }

}
