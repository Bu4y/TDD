import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { userLoginModel } from "./login-model";
import { Constants } from "../../app/app.constants";

/*
  Generated class for the LoginServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class LoginServiceProvider {
  constructor(public http: Http) {
    console.log('Hello LoginServiceProvider Provider');
  }

  login(credential): Promise<userLoginModel> {
    return this.http.get('./assets/json/user.json')
      .toPromise()
      .then(response => {
        window.localStorage.setItem('tdduser', JSON.stringify(response));
        response.json() as userLoginModel
      })
      .catch(this.handleError);
  }

  // postAp(ap) {
  //   return this.http.post(Constants.URL + 'api/orther/aps', ap).toPromise()
  //     .then(response => response.json() as APModel)
  //     .catch(this.handleError);
  // }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
