import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Constants } from "../../app/app.constants";

/*
  Generated class for the TeacherlistServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class TeacherlistServiceProvider {
  constructor(public http: Http) {
    console.log('Hello TeacherlistServiceProvider Provider');
  }
  getdata() {
    return this.http.get('./assets/json/teacher.json')
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
