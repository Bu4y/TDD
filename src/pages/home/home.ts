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
    let data = {
      name: 'หมวดหมู่ใหญ่',
      showSubmenu: false,
      sub: [{
        name: 'หมวดหมู่ย่อยv1',
        showSubmenu: false,
        sub: [{
          name: 'หมวดหมู่ย่อยv2',
          showSubmenu: false,
          sub: [{
            name: 'หมวดหมู่ย่อยv3',
            showSubmenu: false
          }]
        }]
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
  gotoLogin() {
    this.navCtrl.push(LoginPage);
  }

  menuItemHandler(item, object) {
    item.showSubmenu = item.showSubmenu ? false : true;
  }
}
