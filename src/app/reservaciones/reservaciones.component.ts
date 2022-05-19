import { Component, OnInit,ViewEncapsulation,SecurityContext } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { DataService } from '../data.service';
import { Datos } from '../Datos';
import { DatePipe } from '@angular/common'
@Component({
  selector: 'app-reservaciones',
  templateUrl: './reservaciones.component.html',
  styleUrls: ['./reservaciones.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ReservacionesComponent implements OnInit {
  users:Datos[]=[];
  stringJson: any;
  stringObject: any;
  arraydato: any;
  arraydato2: any;
  arraydato3: any;
  arraydatop: any;
  arraydatop2: any;
  arraydatop3: any;
  reservas: any;
  cant :Object[];
  subtotal :Object[];
  total :any;
  totalval :string[];
  constructor(private dataService:DataService, private _sanitizer: DomSanitizer,private datePipe: DatePipe) {
    this.dataService.obtenerDatos().subscribe(data => {
      //console.log(data); 
      this.users = data;
      this.stringJson = JSON.stringify(this.users);
    // ConvertjSON to an object
    this.stringObject = JSON.parse(this.stringJson);
      
    
    });
  
    this.cant =[];
    this.subtotal =[];
    this.totalval =[];
      var datos = localStorage.getItem("c");
      var datos2 = localStorage.getItem("e");
      var datos3 = localStorage.getItem("s");
      var datosp = localStorage.getItem("cp");
      var datosp2 = localStorage.getItem("ep");
      var datosp3 = localStorage.getItem("sp");
       this.arraydato = datos?.split(",");
       
       this.arraydato2 = datos2?.split(",");
       this.arraydato3 = datos3?.split(",");
       this.arraydatop = datosp?.split(",");
       
       this.arraydatop2 = datosp2?.split(",");
       this.arraydatop3 = datosp3?.split(",");
       //this.reservacion();
       //console.log(this.stringObject);
     
   }

  ngOnInit(): void {
   
  }

  reservacion(){
    this.cant =[];
    this.subtotal =[];
    this.totalval =[];
    var sum =0;
    var aux =[] ;
    console.log(this.arraydato);
    if(this.arraydato != null){
      var cont = 0;
      var cantidad = 1;
      var tam =this.stringObject.productos[0].info.length;
      
     for (var i= 0; i < tam ; i++ ){
        if(this.stringObject.productos[0].info[i]["id"] == this.arraydato[cont]){
          this.totalval.push((this.arraydato[cantidad] * this.stringObject.productos[0].info[i]["precio"]).toFixed(2));

            sum = sum +((this.arraydato[cantidad] * this.stringObject.productos[0].info[i]["precio"]));
            aux.push(this.stringObject.productos[0].info[i]);
            this.subtotal.push((this.arraydato[cantidad] * this.stringObject.productos[0].info[i]["precio"]).toFixed(2));
            this.cant.push(this.arraydato[cantidad]);
            cont =cont +2;
            cantidad = cantidad+2;
            
          }
        } 
    }
    if(this.arraydato2 != null){
      var cont = 0;
      var cantidad = 1;
      var tam =this.stringObject.productos[1].info.length;
      
     for (var i= 0; i < tam ; i++ ){
        if(this.stringObject.productos[1].info[i]["id"] == this.arraydato2[cont]){
          this.totalval.push((this.arraydato2[cantidad] * this.stringObject.productos[1].info[i]["precio"]).toFixed(2));

            sum = sum +((this.arraydato2[cantidad] * this.stringObject.productos[1].info[i]["precio"]));
            aux.push(this.stringObject.productos[1].info[i]);
            this.subtotal.push((this.arraydato2[cantidad] * this.stringObject.productos[1].info[i]["precio"]).toFixed(2));
            this.cant.push(this.arraydato2[cantidad]);
            cont =cont +2;
            cantidad = cantidad+2;
            
          }
        } 
    }
    if(this.arraydato3 != null){
      var cont = 0;
      var cantidad = 1;
      var tam =this.stringObject.productos[2].info.length;
      
     for (var i= 0; i < tam ; i++ ){
        if(this.stringObject.productos[2].info[i]["id"] == this.arraydato3[cont]){
            this.totalval.push((this.arraydato3[cantidad] * this.stringObject.productos[2].info[i]["precio"]).toFixed(2));
            sum = sum +((this.arraydato3[cantidad] * this.stringObject.productos[2].info[i]["precio"]));
            aux.push(this.stringObject.productos[2].info[i]);
            this.subtotal.push((this.arraydato3[cantidad] * this.stringObject.productos[2].info[i]["precio"]).toFixed(2));
            this.cant.push(this.arraydato3[cantidad]);
            cont =cont +2;
            cantidad = cantidad+2;
            
          }
        } 
    }

    /**PROMOCIONES */
    if(this.arraydatop != null){
      var cont = 0;
      var cantidad = 1;
      var tam =this.stringObject.productos[0].info.length;
      
     for (var i= 0; i < tam ; i++ ){
        if(this.stringObject.productos[0].info[i]["id"] == this.arraydatop[cont]){
          this.totalval.push((this.arraydatop[cantidad] * this.stringObject.productos[0].info[i]["precio"]).toFixed(2));

            sum = sum +((this.arraydatop[cantidad] * this.stringObject.productos[0].info[i]["precio"]));
            aux.push(this.stringObject.productos[0].info[i]);
            this.subtotal.push((this.arraydatop[cantidad] * this.stringObject.productos[0].info[i]["precio"]).toFixed(2));
            this.cant.push(this.arraydatop[cantidad]);
            cont =cont +2;
            cantidad = cantidad+2;
            
          }
        } 
    }
    if(this.arraydatop2 != null){
      var cont = 0;
      var cantidad = 1;
      var tam =this.stringObject.productos[1].info.length;
      
     for (var i= 0; i < tam ; i++ ){
        if(this.stringObject.productos[1].info[i]["id"] == this.arraydatop2[cont]){
          this.totalval.push((this.arraydatop2[cantidad] * this.stringObject.productos[1].info[i]["precio"]).toFixed(2));

            sum = sum +((this.arraydatop2[cantidad] * this.stringObject.productos[1].info[i]["precio"]));
            aux.push(this.stringObject.productos[1].info[i]);
            this.subtotal.push((this.arraydatop2[cantidad] * this.stringObject.productos[1].info[i]["precio"]).toFixed(2));
            this.cant.push(this.arraydatop2[cantidad]);
            cont =cont +2;
            cantidad = cantidad+2;
            
          }
        } 
    }
    if(this.arraydatop3 != null){
      var cont = 0;
      var cantidad = 1;
      var tam =this.stringObject.productos[2].info.length;
      
     for (var i= 0; i < tam ; i++ ){
        if(this.stringObject.productos[2].info[i]["id"] == this.arraydatop3[cont]){
            this.totalval.push((this.arraydatop3[cantidad] * this.stringObject.productos[2].info[i]["precio"]).toFixed(2));
            sum = sum +((this.arraydatop3[cantidad] * this.stringObject.productos[2].info[i]["precio"]));
            aux.push(this.stringObject.productos[2].info[i]);
            this.subtotal.push((this.arraydatop3[cantidad] * this.stringObject.productos[2].info[i]["precio"]).toFixed(2));
            this.cant.push(this.arraydatop3[cantidad]);
            cont =cont +2;
            cantidad = cantidad+2;
            
          }
        } 
    }
    this.total= sum.toFixed(2);
    return aux;
  }
  producto(){
    
    this.reservas = this.reservacion();
    this.confirmar();
  }

  confirmar(){
    var div = document.querySelector(".confirmacion") as HTMLDivElement;
    var h1 = document.querySelector(".res") as HTMLHtmlElement;

    if(this.reservas.length !=0){
      h1.style.display="block";
      div.style.display="block";
    }
    else{
      h1.style.display="none";
      div.style.display="none";
    }
 
  }

  res(){
    var nom = document.querySelector("#nombre") as HTMLInputElement;
    var ced = document.querySelector("#cedula") as HTMLInputElement;
    nom.value="";
    ced.value="";
  }
  check(){
    var nom = document.querySelector("#nombre") as HTMLInputElement;
    var ced = document.querySelector("#cedula") as HTMLInputElement;
    if( nom.value =="" || ced.value ==""){
      alert("Los campos de la reserva son obligatorios");
    }
    else{
      if(ced.value.length ==10){
        localStorage.setItem("c","");
        localStorage.setItem("cp","");
        localStorage.setItem("e","");
        localStorage.setItem("ep","");
        localStorage.setItem("s","");
        localStorage.setItem("sp","");
        this.arraydato = []; 
        this.arraydato2 = [];
        this.arraydato3 = [];
        this.arraydatop =[];
        this.arraydatop2 = [];
        this.arraydatop3 = [];
     
        this.subtotal =[];
        this.totalval =[];
        
        var producto;
        var date = new Date();
       
        if(localStorage.getItem("Compra") == null){
          producto=nom.value+","+ced.value+","+this.datePipe.transform(date,"yyyy-MM-dd")+","+this.reservas[0].nombre+","+this.cant[0];
        }
        else{
          producto = localStorage.getItem("Compra")+";"+nom.value+","+ced.value+","+this.datePipe.transform(date,"yyyy-MM-dd")+","+this.reservas[0].nombre+","+this.cant[0];
        }
        
        
        for( var i = 1; i< this.reservas.length ; i++){
        
         producto = producto +"," +this.reservas[i].nombre+","+this.cant[i];
          
        }
        localStorage.setItem("Compra",producto+","+this.total);
      
        
        this.cant =[];
        this.reservas = [];
        this.total = 0;
        this.producto();
        alert("Reservación correcta");
      }
      else{
        alert("Cédula Incorrecta");
      }
      
    }
   
  }
  remover(id:Number,cat:Number){
    var tam =this.reservas.length;
    var aux  = [];
    aux =this.reservas;
    
    for (var i= 0; i < tam ; i++ ){
 
      var auxid =  this.reservas[i]["id"];
      var auxcat = this.reservas[i]["cat"];
          if( auxid==id && auxcat==cat){
            this.total = this.total - (parseFloat(this.subtotal[i]+""));
            this.total = this.total.toFixed(2);
            if( cat == 1){
              if(this.reservas[i]["promocion"]==0){

                /*this.arraydato.pop(i);
                this.arraydato.pop(i);*/
                var cont = 0;
                for (var i= 0; i < this.arraydato.length ; i++ ){
                   
                   
                   if(this.arraydato[cont] == id){
                   this.arraydato.splice(cont,2);
                    //alert(this.arraydato.splice(cont,1));
                      break;
                   }
                   cont = cont+2;
                  }
                
                /*this.cant.splice(i,1);
                this.subtotal.splice(i,1);
                aux.splice(i,1);*/
                console.log("Datos: actual",this.arraydato);
                localStorage.setItem("c",this.arraydato);
                break;
              }
              if(this.reservas[i]["promocion"]==1){
                /*this.arraydatop.pop(i);
                this.arraydatop.pop(i);*/
                var cont = 0;
                for (var i= 0; i < this.arraydatop.length ; i ++ ){
                 
                  if(this.arraydatop[cont] == id){
                    this.arraydatop.splice(cont,2);
                    //alert(this.arraydatop.splice(cont,1));
                    break;
                  }
                  cont = cont+2;
                 }
                /*this.cant.splice(i,1);
                this.subtotal.splice(i,1);
                aux.splice(i,1);*/
                console.log("Datos: actual",this.arraydatop);
                localStorage.setItem("cp",this.arraydatop);
                break;
              }
              
            }
            if(cat ==2){
              if(this.reservas[i]["promocion"]==0){
                var cont = 0;
                for (var i= 0; i < this.arraydato2.length ; i++ ){
                   
                   
                   if(this.arraydato2[cont] == id){
                   this.arraydato2.splice(cont,2);
                    //alert(this.arraydato.splice(cont,1));
                      break;
                   }
                   cont = cont+2;
                  }
                /*this.cant.splice(i,1);
                this.subtotal.splice(i,1);
                
                aux.splice(i,1);*/
                localStorage.setItem("e",this.arraydato2);
                break;
              }
              if(this.reservas[i]["promocion"]==1){
                var cont = 0;
                for (var i= 0; i < this.arraydatop2.length ; i++ ){
                   
                   
                   if(this.arraydatop2[cont] == id){
                   this.arraydatop2.splice(cont,2);
                    //alert(this.arraydato.splice(cont,1));
                      break;
                   }
                   cont = cont+2;
                  }
                /*this.cant.splice(i,1);
                this.subtotal.splice(i,1);
                aux.splice(i,1);*/
                localStorage.setItem("ep",this.arraydatop2);
                break;
              }
            }
            if(cat ==3){
              if(this.reservas[i]["promocion"]==0){
                var cont = 0;
                for (var i= 0; i < this.arraydato3.length ; i++ ){
                   
                   
                   if(this.arraydato3[cont] == id){
                   this.arraydato3.splice(cont,2);
                    //alert(this.arraydato.splice(cont,1));
                      break;
                   }
                   cont = cont+2;
                  }
                /*this.cant.splice(i,1);
                this.subtotal.splice(i,1);
                aux.splice(i,1);*/
                localStorage.setItem("s",this.arraydato3);
                break;
              }
             
              if(this.reservas[i]["promocion"]==1){
                var cont = 0;
                for (var i= 0; i < this.arraydatop3.length ; i++ ){
                   
                   
                   if(this.arraydatop3[cont] == id){
                   this.arraydatop3.splice(cont,2);
                    //alert(this.arraydato.splice(cont,1));
                      break;
                   }
                   cont = cont+2;
                  }
                /*this.cant.splice(i,1);
                this.subtotal.splice(i,1);
                aux.splice(i,1);*/
                localStorage.setItem("sp",this.arraydatop3);
                break;
              }
             
             
            }
           
            
            
          
          }
    }
   
    this.cant.splice(i,1);
   
    aux.splice(i,1);
    this.producto();
    this.confirmar();
  }
}
