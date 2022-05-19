import { Injectable, Output,EventEmitter } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ServicioUsuarioService {
  sesion() {
    throw new Error('Method not implemented.');
  }
  usuario :string;
  clave :string;

  
  @Output() disparadorDeUsuarios : EventEmitter<any> = new EventEmitter();
  constructor() { 
    this.usuario="Francisco";
    this.clave="12345";
    
  }
  
}
