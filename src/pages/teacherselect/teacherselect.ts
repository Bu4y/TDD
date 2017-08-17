import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { TeacherlistPage } from "../teacherlist/teacherlist";

/**
 * Generated class for the TeacherselectPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-teacherselect',
  templateUrl: 'teacherselect.html',
})
export class TeacherselectPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeacherselectPage');
  }

  teacherlist() {
    this.navCtrl.push(TeacherlistPage);
  }

}
