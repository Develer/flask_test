import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';


@Injectable()
export class WorksampleService {
  private storeUrl =  'http:\/\/localhost:5000/store/json';
  private listUrl =  'http:\/\/localhost:5000/list/json';

  constructor(private http: Http) { }

  getList(): Promise<string[]> {
    return this.http.get(this.listUrl)
               .toPromise()
               .then(response => response.json().timestamps as string[])
               .catch(this.handleError);
  }

  getStore(): Promise<string> {
    return this.http.get(this.storeUrl)
               .toPromise()
               .then(response => response.json().timestamp as string)
               .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}

