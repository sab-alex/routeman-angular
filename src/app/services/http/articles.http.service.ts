import {Injectable} from '@angular/core';
import {HttpService} from './http.service';
import {Http} from '@angular/http';
import {Article} from './../../models/articles/article.model';


@Injectable()
export class ArticlesHttpService extends HttpService{

  constructor(private http: Http) {
    super(http);
  }

  getAll(): Promise<any> {
    return this.http.get(this.root + '/api/articles').toPromise().then(response => {
      if (response.ok) {
        return response.json();
      } else {
        return null;
      }
    }).catch(this.handleError);
  }
}
