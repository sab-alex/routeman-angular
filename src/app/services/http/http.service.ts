import {environment} from '../../../environments/environment';
import {Http} from '@angular/http';

export class HttpService {
  root = environment.host;

  constructor(http: Http) {

  }

  handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
