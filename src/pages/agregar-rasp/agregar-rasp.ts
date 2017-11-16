import { Component } from '@angular/core';
import { NavController,NavParams, AlertController } from 'ionic-angular';
/*Providers*/
import { RaspProvider } from '../../providers/rasp/rasp';
/**
 * Generated class for the AgregarRasp page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-agregar-rasp',
  templateUrl: 'agregar-rasp.html',
})
export class AgregarRasp {

	input: any;

  	constructor(public navCtrl: NavController, public navParams: NavParams, public rasp: RaspProvider, public alertCtrl: AlertController) {
  		this.input = {
        	nombre: '',
        	ip: '',
        	password: ''
    	}
  	}

  	ionViewDidLoad() {
    	console.log('ionViewDidLoad AgregarRasp');
  	}

  	registrar(){
  		this.rasp.insert(this.input);
      let alert = this.alertCtrl.create({
      title: 'Raspberry agregada',
      message: 'Raspberry agregada exitosamente',
      buttons: [
        {
          text: 'OK',
          handler: () => {
            this.navCtrl.pop();
          }
        }
      ]
    });
    alert.present();
  	}

}
