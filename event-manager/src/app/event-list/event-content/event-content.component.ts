import {Component, ElementRef, OnChanges, ViewChild} from '@angular/core';
import {EventModel} from '../../shared/event.model';
import {EventListService} from '../event-list.service';
import {ActivatedRoute, Router} from '@angular/router';
import {take, tap} from 'rxjs/operators';
import {CommentModel} from '../../shared/comment.model';
import {AuthService} from '../../auth/auth.service';

@Component({
  selector: 'app-event-content',
  templateUrl: './event-content.component.html',
  styleUrls: ['./event-content.component.css']
})
export class EventContentComponent implements OnChanges {

  @ViewChild('com') commentInput: ElementRef;

  eventModel: EventModel = new EventModel();

  constructor(private eventService: EventListService,
              private authService: AuthService,
              private route: ActivatedRoute,
              private router: Router) {
    route.params.subscribe((params) => {
      eventService.getEventById(parseInt(params['id'])).subscribe((event) => {
        this.eventModel = EventModel.fromApi(event);
        this.eventService.getCommentsFromEventId(this.eventModel.id)
          .pipe(take(1), tap(console.log))
          .subscribe(data => this.eventModel.comments = data.map(el => CommentModel.fromApi(el)));
      });
    });
  }

  ngOnChanges(): void {
  }

  editEvent() {
    this.router.navigate(['events', this.eventModel.id, 'edit']);
  }

  createComment(value: string) {
    if (value != undefined && value.length > 0) {
      this.authService.getUser().subscribe(user => {
        this.eventService.createNewComment(user, new Date(), value, this.eventModel.id)
          .pipe(take(1))
          .subscribe(newComment => {
            this.eventModel.comments.push(CommentModel.fromApi(newComment));
            this.commentInput.nativeElement.value = '';
          });
      });
    }
  }
}
