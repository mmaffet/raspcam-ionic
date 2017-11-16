import { Component } from '@angular/core';
import { NavController,NavParams, AlertController } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { Http } from '@angular/http';
/*Providers*/
import { RaspProvider } from '../../providers/rasp/rasp';
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

  raspberries: any;
  raspy: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public rasp: RaspProvider, public iab: InAppBrowser,public http: Http, public alertCtrl: AlertController) {
    this.raspberries = rasp.getAll();
    this.raspy = navParams.get("raspberry");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Raspberry');
  }

  verCamara(ip){
    const browser = this.iab.create('http://'+ip+':8081');
    browser.show()
  }

  activar(ip){
    this.rasp.activar(ip).subscribe(result => {
        console.log(result);
        let alert = this.alertCtrl.create({
        title: 'Alarma armada',
        message: 'Se armó el sistema de alarma',
        buttons: [
          {
            text: 'OK'
          }
        ]
      });
      alert.present();
      });
  }

  desactivar(ip){
    this.rasp.descactivar(ip).subscribe(result => {
        console.log(result);
        let alert = this.alertCtrl.create({
          title: 'Alarma desactivada',
          message: 'Se desactivó el sistema de alarma',
          buttons: [
            {
              text: 'OK'
            }
          ]
        });
        alert.present();
      });
  }

  eliminar(raspberry){
    this.rasp.eliminar(raspberry);
    this.navCtrl.pop();
  }

}
