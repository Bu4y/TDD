import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { listTeacher } from "./teacherlist-model";
import { TeacherlistServiceProvider } from "./teacherlist-service";
/**
 * Generated class for the TeacherlistPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-teacherlist',
  templateUrl: 'teacherlist.html',
})
export class TeacherlistPage {
  listTeacher: Array<listTeacher>;
  loading: any;
  teachers: Array<any> = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public teacherService: TeacherlistServiceProvider, public loadingCtrl: LoadingController) {
    this.loading = this.loadingCtrl.create();
    this.teachers = this.teacherService.getlistTeacher() || [];
    this.teacherService.getdata().then(data => {
      this.listTeacher = data;
      this.checkitem(this.teachers);
      this.loading.dismiss();
    });
  }

  checkitem(items) {
    this.listTeacher.forEach(item => {
      if (this.arrayObjectIndexOf(items, item.username, "username") === -1) {
        // return false;
        item.checked = false;
      } else {
        item.checked = true;
        // return true;
      }
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeacherlistPage');
  }

  additem(item, index) {
    if (this.arrayObjectIndexOf(this.teachers, item.username, "username") === -1) {
      this.teachers.push(item);
    } else {
      this.teachers.splice(this.arrayObjectIndexOf(this.teachers, item.username, "username"), 1);
    }
  }
  arrayObjectIndexOf(myArray, searchTerm, property) {
    for (var i = 0, len = myArray.length; i < len; i++) {
      if (myArray[i][property] === searchTerm) return i;
    }
    return -1;
  }
  done() {
    window.localStorage.setItem('teacherlist', JSON.stringify(this.teachers));
    this.navCtrl.pop();
    // alert(this.teachers);
  }


}
