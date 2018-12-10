import { Injectable } from '@angular/core';
import {HttpService} from './http.service';
import {Http} from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class CommentsHttpService extends HttpService {

  constructor(private http: Http) {
    super(http);
  }

  getAll(): Promise<any> {
    return this.http.get(this.root + '/api/comments').toPromise().then(response => {
      if (response.ok) {
        return response.json();
      } else {
        return null;
      }
    }).catch(this.handleError);
  }
}
