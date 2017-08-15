import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { dashModel } from "./home-model";

import { Constants } from "../../app/app.constants";


/*
  Generated class for the HomeServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class HomeServiceProvider {

  constructor(public http: Http) {
    console.log('Hello HomeServiceProvider Provider');
  }

  getdata(): Promise<dashModel> {
    return this.http.get(Constants.URL + 'api/getdashboard')
      .toPromise()
      .then(response => response.json() as dashModel)
      .catch(this.handleError);
  }

  getUser() {
    return JSON.parse(window.localStorage.getItem('tdduser'));
  }

  // getdata(): Promise<dashModel> {
  //   return this.http.get('./assets/json/dashboard.json')
  //     .toPromise()
  //     .then(response => response.json() as dashModel)
  //     .catch(this.handleError);
  // }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
