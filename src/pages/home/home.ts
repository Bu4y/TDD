import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { LoginPage } from "../login/login";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  filter: string = 'projects';
  constructor(public navCtrl: NavController) {

  }
  gotoLogin() {
    this.navCtrl.push(LoginPage);
  }
}
