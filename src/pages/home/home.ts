import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { LoginPage } from "../login/login";
import { TodayPage } from "../today/today";
import { NextweekPage } from "../nextweek/nextweek";
import { NewprojectPage } from "../newproject/newproject";
import { FilterPage } from "../filter/filter";

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
    // let data = [{
    //   name: 'หมวดหมู่ใหญ่1',
    //   accno: 10000,
    //   parent: null
    // }, {
    //   name: 'หมวดหมู่ใหญ่2',
    //   accno: 20000,
    //   parent: null
    // }, {
    //   name: 'หมวดหมู่ใหญ่1-1',
    //   accno: 11000,
    //   parent: 10000
    // }, {
    //   name: 'หมวดหมู่ใหญ่1-1-1',
    //   accno: 11100,
    //   parent: 11000
    // }, {
    //   name: 'หมวดหมู่ใหญ่1-1-1-1',
    //   accno: 11110,
    //   parent: 11100
    // }]
    // this.category = data;
  }
  gotoLogin() {
    this.navCtrl.push(LoginPage);
  }

  today() {
    this.navCtrl.push(TodayPage);
  }

  nextweek() {
    this.navCtrl.push(NextweekPage);
  }

  newproject() {
    this.navCtrl.push(NewprojectPage);
  }

  filterpage(title) {
    this.navCtrl.push(FilterPage, { title: title });
  }

  menuItemHandler(item, object) {
    item.showSubmenu = item.showSubmenu ? false : true;
  }
}
