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
  test: any;

  key: string = 'children';
  accounts: Array<any>;
  data: Array<any> = [{
    name: "สินทรัพย์",
    accountno: 1000000,
    parent: null,
    status: "active",
  },
  {
    name: "สินทรัพย์ 1.1",
    accountno: 1100000,
    parent: 1000000,
    status: "active"
  },
  {
    name: "หนี้สิน",
    accountno: 2000000,
    parent: null,
    status: "active"
  },
  {
    name: "หนี้สิน 2.1",
    accountno: 2100000,
    parent: 2000000,
    status: "active"
  },
  {
    name: "หนี้สิน 2.1.1",
    accountno: 2110000,
    parent: 2100000,
    status: "active"
  },
  {
    name: "หนี้สิน 2.2",
    accountno: 2200000,
    parent: 2000000,
    status: "active"
  },
  {
    name: "หนี้สิน 2.2.1",
    accountno: 2210000,
    parent: 2200000,
    status: "active"
  },
  {
    name: "หนี้สิน 2.2.2",
    accountno: 2220000,
    parent: 2200000,
    status: "active"
  },
  {
    name: "หนี้สิน 2.2.2.1",
    accountno: 2221000,
    parent: 2220000,
    status: "active"
  },
  {
    name: "หนี้สิน 2.2.2.1.1",
    accountno: 2221100,
    parent: 2221000,
    status: "active"
  }]
  constructor(public navCtrl: NavController) {
    this.accounts = this.listToTree(this.data);
  }

  
  listToTree(data) {
    var ID_KEY = 'accountno';
    var PARENT_KEY = 'parent';
    var CHILDREN_KEY = 'children';

    var tree = [],
      childrenOf = {};
    var item, id, parentId;

    for (var i = 0, length = data.length; i < length; i++) {
      item = data[i];
      id = item[ID_KEY];
      parentId = item[PARENT_KEY] || 0;
      // every item may have children
      childrenOf[id] = childrenOf[id] || [];
      // init its children
      item[CHILDREN_KEY] = childrenOf[id];
      if (parentId != 0) {
        // init its parent's children object
        childrenOf[parentId] = childrenOf[parentId] || [];
        // push it into its parent's children object
        childrenOf[parentId].push(item);
      } else {
        tree.push(item);
      }
    };

    return tree;
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
