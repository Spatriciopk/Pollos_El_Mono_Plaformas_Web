import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menuadministrador',
  templateUrl: './menuadministrador.component.html',
  styleUrls: ['./menuadministrador.component.css']
})


export class MenuadministradorComponent implements OnInit {
  compras:any
  arraydato: any;
  aux2;
  arraydatoSep;
  tam;
  aux:any;
 
  constructor() { 
      this.compras = localStorage.getItem("Compra");
      if(this.compras != null){
        this.arraydato = this.compras.split(";");
        this.tam=[];
        this.arraydatoSep=[];
        for (let i =0 ; i < this.arraydato.length; i++){
           this.aux=this.arraydato[i].split(",");
           this.tam[i] = this.aux.length;
           this.aux2=[];
           
           var cont = 0;
          
           for (let k =0 ; k < this.aux.length; k++){
             
               if( k <3){
                 this.aux2[cont] =this.aux[k];
                 cont = cont+1
               }
               if(k >= 3 && k<this.aux.length-1){
                   if(this.aux2[3] == undefined){
                     this.aux2[3] =this.aux[k] +" ";
                   }else{
                     this.aux2[3] +=this.aux[k] +" ";
                   }
                 
               }
               if(k+1 == this.aux.length){
                 cont = cont+1;
                 this.aux2[cont] =this.aux[this.aux.length-1];
               }
              
           }
           this.arraydatoSep[i] =this.aux2;
        }
        console.log(this.tam);
        console.log(this.arraydato);
        console.log(this.arraydatoSep);
      }
  }

  ngOnInit(): void {
  }

  listo(id:Number){
    var ids = id;
    this.arraydatoSep?.splice(parseInt(ids+""),1);
    this.arraydato?.splice(parseInt(ids+""),1);
    var texto = ""
    for (var i=0 ; i < this.arraydato.length; i++){
        if( i != this.arraydato.length-1){
          texto += this.arraydato[i]+";";
        }
        else{
          texto += this.arraydato[i];
        }
       
    }
    localStorage.setItem("Compra",texto);
    alert("Pedido entregado");
  }

  /*busqueda(){
    var pedido = 0;
    var cedula = document.querySelector("#cedula") as HTMLInputElement
    this.compras = localStorage.getItem("Compra");
    if(this.compras != null){
      this.arraydato = this.compras.split(";");
      this.tam=[];
      this.arraydatoSep=[];
      for (let i =0 ; i < this.arraydato.length; i++){
        
         this.aux=this.arraydato[i].split(",");
         this.tam[i] = this.aux.length;
         this.aux2=[];
         
         var cont = 0;
        
         for (let k =0 ; k < this.aux.length; k++){
           
             if( k <3){
               this.aux2[cont] =this.aux[k];
               cont = cont+1
             }
             if(k >= 3 && k<this.aux.length-1){
                 if(this.aux2[3] == undefined){
                   this.aux2[3] =this.aux[k] +" ";
                 }else{
                   this.aux2[3] +=this.aux[k] +" ";
                 }
               
             }
             if(k+1 == this.aux.length){
               cont = cont+1;
               this.aux2[cont] =this.aux[this.aux.length-1];
             }
            
         }
         if( cedula.value == this.aux2[1] ){
          this.arraydatoSep[pedido] =this.aux2;
          //cedula.value="";
          pedido = pedido +1;
         }
         
      }
      if(this.arraydatoSep.length == 0){
        alert("No hay un cliente registrado con esa CI");
        this.ver();
      }
     
  }
  }*/
  ver(){
    var cedula = document.querySelector("#cedula") as HTMLInputElement
    cedula.value="";
    this.compras = localStorage.getItem("Compra");
    if(this.compras != null){
      this.arraydato = this.compras.split(";");
      this.tam=[];
      this.arraydatoSep=[];
      for (let i =0 ; i < this.arraydato.length; i++){
         this.aux=this.arraydato[i].split(",");
         this.tam[i] = this.aux.length;
         this.aux2=[];
         
         var cont = 0;
        
         for (let k =0 ; k < this.aux.length; k++){
           
             if( k <3){
               this.aux2[cont] =this.aux[k];
               cont = cont+1
             }
             if(k >= 3 && k<this.aux.length-1){
                 if(this.aux2[3] == undefined){
                   this.aux2[3] =this.aux[k] +" ";
                 }else{
                   this.aux2[3] +=this.aux[k] +" ";
                 }
               
             }
             if(k+1 == this.aux.length){
               cont = cont+1;
               this.aux2[cont] =this.aux[this.aux.length-1];
             }
            
         }
         this.arraydatoSep[i] =this.aux2;
      }
      console.log(this.tam);
      console.log(this.arraydato);
      console.log(this.arraydatoSep);
    }
  }

}
