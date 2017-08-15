import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { getDataNewProject } from "./newproject-model";

/*
  Generated class for the NewprojectServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class NewprojectServiceProvider {

  constructor(public http: Http) {
    console.log('Hello NewprojectServiceProvider Provider');
  }

  getdata(): Promise<getDataNewProject> {
    return this.http.get('./assets/json/masterplan.json')
      .toPromise()
      .then(response => response.json() as getDataNewProject)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
