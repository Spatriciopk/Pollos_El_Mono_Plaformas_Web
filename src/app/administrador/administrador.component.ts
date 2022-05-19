import { Component, Inject, OnInit} from '@angular/core';
import { ServicioUsuarioService } from '../servicio-usuario.service';
import { DOCUMENT } from '@angular/common';
import { LoginService } from '../login.service';
@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css']
})
export class AdministradorComponent implements OnInit {
 
  user:string
  pass:string
  ser:ServicioUsuarioService
 
  //log:LoginService
  
  constructor(@Inject(DOCUMENT) private document: Document,private login:LoginService) { 
     
     this.ser = new  ServicioUsuarioService();
     localStorage.setItem("token","0");
      this.user = this.ser.usuario;
      this.pass = this.ser.clave;
      
      //this.usuario.disparadorDeUsuarios.subscribe(data =>{
        

        //console.log("Recibir datos",data);
     // })
  }

  ngOnInit(): void {
    //this.usuario.disparadorDeUsuarios.emit({data:"Francisco"});
     
  }

  res(){
    var usuario = document.querySelector("#usuario") as HTMLInputElement;
    var clav = document.querySelector("#contrasena") as HTMLInputElement;
    usuario.value="";
    clav.value="";
  }
  anadir(){
    //console.log(this.ser.sesion);
    //this.document.location.href="/index";
      var usuario = document.querySelector("#usuario") as HTMLInputElement;
      var clav = document.querySelector("#contrasena") as HTMLInputElement;
      if( usuario.value != "Patricio" && clav.value != "12345" ){
        alert("Usuario / Contraseña incorrectas");
        localStorage.setItem("token","0");
        
      }else{
        localStorage.setItem("token","1");
        
      
        this.document.location.href="../adminProduc";
       // })
        //

          //console.log("Recibir datos",data);
       // })
        //this.document.location.href="/adminProduc";
      }
  }
}
