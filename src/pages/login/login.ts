import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

import 'rxjs/Rx';

import { LoginServiceProvider } from "./login-service";
import { userLoginModel } from "./login-model";
import { loginModel } from "./login-model";
import { HomePage } from "../home/home";
import { RegisterPage } from "../register/register";

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  user: userLoginModel = new userLoginModel();
  credential: loginModel = new loginModel();
  loading: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public logService: LoginServiceProvider, public loadingCtrl: LoadingController
  ) {
    this.loading = this.loadingCtrl.create();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');

  }
  login(data) {
    this.logService
      .login()
      .then(data => {
        this.user = data;
        this.loading.dismiss();
        this.navCtrl.push(HomePage);
      })
  }

  register() {
    this.navCtrl.push(RegisterPage);
  }

}
