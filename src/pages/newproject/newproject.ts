import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

import { TeacherselectPage } from "../teacherselect/teacherselect";
import { NewprojectServiceProvider } from "./newproject-service";
import { getDataNewProject } from "./newproject-model";
import { newprojectModel } from "./newproject-model";
import { teacher } from "./newproject-model";
/**
 * Generated class for the NewprojectPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-newproject',
  templateUrl: 'newproject.html',
})
export class NewprojectPage {
  data: getDataNewProject = new getDataNewProject();
  teacherlist: Array<teacher> = [];
  detailteacherlist: string = '';
  loading: any;
  newproject: newprojectModel = new newprojectModel();
  constructor(public navCtrl: NavController, public navParams: NavParams, public newService: NewprojectServiceProvider, public loadingCtrl: LoadingController) {
    this.loading = this.loadingCtrl.create();
    this.newService.getdata().then(data => {
      this.data = data;
      this.loading.dismiss();
    });
    this.teacherlist = this.newService.getTeachers();
    this.newproject.teacher = this.teacherlist;
    this.detailteacherlist = this.teacherlist ? this.teacherlist.length + ' คน' : '';
  }
  ionViewWillEnter() {
    console.log('ionViewWillEnter');
    this.teacherlist = this.newService.getTeachers();
    this.newproject.teacher = this.teacherlist;
    this.detailteacherlist = this.teacherlist ? this.teacherlist.length + ' คน' : '';
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad NewprojectPage');
  }

  gohome() {
    this.navCtrl.pop();
  }

  collaborators() {
    this.navCtrl.push(TeacherselectPage);
  }

  save() {
    console.log(this.newproject);
    window.localStorage.removeItem('teacherlist');
    this.navCtrl.pop();
  }

}
