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
    return null;
    //return this.events.find(e => e.id == id);
  }

}
