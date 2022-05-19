import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Datos } from './Datos';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpclient: HttpClient) {
    console.log('El servicio Http esta funcionando…')
   }
   obtenerDatos(){
    return this.httpclient.get<Datos[]>('../assets/json/datos.json');
    }
}
