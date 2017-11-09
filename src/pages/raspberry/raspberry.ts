import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';

/**
 * Generated class for the Raspberry page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-raspberry',
  templateUrl: 'raspberry.html',
})
export class Raspberry {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Raspberry');
  }

}
