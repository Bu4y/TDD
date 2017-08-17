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
  constructor(public navCtrl: NavController, public navParams: NavParams, public teacherService: TeacherlistServiceProvider, public loadingCtrl: LoadingController) {
    this.loading = this.loadingCtrl.create();
    this.teacherService.getdata().then(data => {
      this.listTeacher = data;
      this.loading.dismiss();
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeacherlistPage');
  }

  teacher(item){
    alert(item);
  }

}
