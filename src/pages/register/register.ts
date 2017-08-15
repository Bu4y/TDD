import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

import { LoginPage } from "../login/login";
import { registerModel } from "./register-model";
import { RegisterServiceProvider } from "./register-service";
/**
 * Generated class for the RegisterPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  regit: registerModel = new registerModel();
  loading: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, public regitService: RegisterServiceProvider) {
    this.loading = this.loadingCtrl.create();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  regiter() {
    // alert(JSON.stringify(this.regit));
    this.regitService
      .register(this.regit)
      .then(data => {
        this.loading.dismiss();
        this.navCtrl.push(LoginPage);
      }, err => {
        let error = JSON.parse(err._body);
        alert(error.message);
      })
  }

  cancel() {
    this.navCtrl.push(LoginPage);
  }

}
