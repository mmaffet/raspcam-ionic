import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the RaspProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RaspProvider {
 
 	rasps: any; //Listado de Raspberries
  	constructor(public http: Http) {
  		this.rasps = [{id: 1, nombre: "Casa", ip: "127.0.0.1", validado: 1}];
  	}

  	getAll(){
      return this.rasps;
  	}

    getStatus(ip){
      var response = this.http.get("http://"+ip+":5002/status")
        .map(res => res.json());
       return response;  
    }

    ping(ip){
      var response = this.http.get("http://"+ip+":5002")
        .map(res => res.json());
       return response;  
    }

  	insert(raspberry){
  		this.rasps.push({id: 1, nombre: raspberry.nombre, ip:raspberry.ip, validado: 0});
  	}

}
