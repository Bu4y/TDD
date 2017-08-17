import { Component } from '@angular/core';
import { NavController, LoadingController, ModalController } from 'ionic-angular';

import { LoginPage } from "../login/login";
import { TodayPage } from "../today/today";
import { NextweekPage } from "../nextweek/nextweek";
import { NewprojectPage } from "../newproject/newproject";
import { FilterPage } from "../filter/filter";
import { dashModel } from "./home-model";
import { userLoginModel } from "./home-model";
import { project } from "./home-model";
import { SettingPage } from "../setting/setting";
import { ProfilePage } from "../profile/profile";
import { NotiPage } from "../noti/noti";

import { HomeServiceProvider } from "./home-service";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  filter: string = 'projects';
  test: any;
  loading: any;
  dashdata: dashModel = new dashModel();
  user: userLoginModel = new userLoginModel();

  key: string = 'children';
  accounts: Array<any>;
  constructor(public navCtrl: NavController, public homeService: HomeServiceProvider, public loadingCtrl: LoadingController, public modalCtrl: ModalController) {
    this.loading = this.loadingCtrl.create();
    this.homeService
      .getdata()
      .then(data => {
        this.dashdata = data;
        this.accounts = this.listToTree(data.project);
        this.loading.dismiss();
      })
    this.user = JSON.parse(this.homeService.getUser()._body);

  }
  presentProfileModal() {
    let profileModal = this.modalCtrl.create(NextweekPage, { userId: 8675309 });
    profileModal.present();
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

  setting() {
    this.navCtrl.push(SettingPage);
  }

  profile() {
    this.navCtrl.push(ProfilePage);
  }

  noti() {
    this.navCtrl.push(NotiPage);
  }

  gotoEdit(item) {
    console.log(item);
  }
}
