import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
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

  	constructor(public navCtrl: NavController, public navParams: NavParams, public rasp: RaspProvider) {
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
      console.log("registrando");
  		this.rasp.insert(this.input);
  	}

}
