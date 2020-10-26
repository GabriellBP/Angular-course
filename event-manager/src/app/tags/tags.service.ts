import { Injectable } from '@angular/core';
import {TagModel} from '../shared/tag.model';
import {User} from '../shared/user.model';
import {HttpClient} from '@angular/common/http';
import Constants from '../shared/constants';
import {Observable} from 'rxjs';
import {EventModel} from '../shared/event.model';
import {Tag} from '@angular/compiler/src/i18n/serializers/xml_helper';

@Injectable({
  providedIn: 'root'
})
export class TagsService {

  constructor(private http: HttpClient) {

  }

  getTags(): Observable<TagModel[]> {
    return this.http.get<TagModel[]>(Constants.API_V1_URL + 'tags/');
  }

  createTag(tag: TagModel): Observable<TagModel> {
    return this.http.post<TagModel>(Constants.API_V1_URL + 'tags/', tag.toApiObj());
  }

  updateTag(tag: TagModel): Observable<TagModel> {
    return this.http.put<TagModel>(Constants.API_V1_URL + 'tags/' + tag.id + '/', tag.toApiObj());
  }

  deleteTag(tag: TagModel): Observable<any> {
    return this.http.delete(Constants.API_V1_URL + 'tags/' + tag.id  + '/');
  }
}
