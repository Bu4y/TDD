import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FilterPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-filter',
  templateUrl: 'filter.html',
})
export class FilterPage {
  title: string = 'filter';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.title = this.navParams.get('title');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FilterPage');
  }


}
