import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { LoginPage } from "../login/login";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  filter: string = 'projects';
  showSubmenu: any;
  category: Array<any> = [];
  constructor(public navCtrl: NavController) {
    for (var i = 20; i > 0; i--) {
      let data = {
        name: 'หมวดหมู่',
        showSubmenu: false,
        sub: [{
          name: 'หมวดหมู่ย่อย'
        },
        {
          name: 'หมวดหมู่ย่อย'
        },
        {
          name: 'หมวดหมู่ย่อย'
        }]
      }
      this.category.push(data);
    }
  }
  gotoLogin() {
    this.navCtrl.push(LoginPage);
  }

  menuItemHandler(index): void {
    this.showSubmenu = this.showSubmenu === index ? -1 : index;
  }
}
