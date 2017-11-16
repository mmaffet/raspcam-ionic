import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
/*Pages*/
import { Raspberry } from '../raspberry/raspberry';
import { AgregarRasp } from '../agregar-rasp/agregar-rasp';
/*Providers*/
import { RaspProvider } from '../../providers/rasp/rasp';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  raspberries: any;

  constructor(public navCtrl: NavController, public rasp: RaspProvider) {
    this.raspberries = rasp.getAll();
    for (var i = this.raspberries.length - 1; i >= 0; i--) {
      //this.raspberries[i].status = "Buscando";
      rasp.getStatus((this.raspberries[i].ip)).subscribe(result => {
        //this.raspberries[i].status = "Conectado";
      });
      rasp.ping((this.raspberries[i].ip)).subscribe(result => {
        console.log(result);
      });
    }
  }

  agregar(){
		this.navCtrl.push(AgregarRasp);
  }

  goDetalle(rasppi){
		this.navCtrl.push(Raspberry,{raspberry: rasppi});
  }

}
