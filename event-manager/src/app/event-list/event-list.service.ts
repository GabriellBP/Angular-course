import { Injectable } from '@angular/core';
import { EventModel } from '../shared/event.model';
import { CommentModel } from '../shared/comment.model';
import { TagModel } from '../shared/tag.model';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import Constants from "../shared/constants";

@Injectable()
export class EventListService {


  constructor(private http: HttpClient) {

  }

  getNextEvents(): Observable<EventModel[]> {
    return this.http.get<EventModel[]>(Constants.API_V1_URL + 'events/');
  }

  getEventById(id: number) {
    return this.http.get<EventModel>(Constants.API_V1_URL + 'events/' + id);
  }

  createEvent(event: EventModel) {
    return this.http.post<EventModel>(Constants.API_V1_URL + 'events/', event.toApiObj());
  }

  updateEvent(evt: EventModel) {
    return this.http.put<EventModel>(Constants.API_V1_URL + 'events/' + evt.id + '/', evt.toApiObj());
  }

  getCommentsFromEventId(eventId: number) {
    return this.http.get<CommentModel[]>(`${Constants.API_V1_URL}comments?search=${eventId}`);
  }

  createNewComment(user: any, date: Date, value: string, eventId: number) {
    const commentModel = new CommentModel(user.username, date, value);
    return this.http.post<CommentModel>(`${Constants.API_V1_URL}comments/`, commentModel.toApiObj(user.email, eventId));
  }
}
