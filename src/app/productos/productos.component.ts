import { Component, OnInit,SecurityContext,ViewEncapsulation } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { DataService } from '../data.service';
import { Datos } from '../Datos';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ProductosComponent implements OnInit {
  users:Datos[]=[];
  stringJson: any;
  stringObject: any;
  stringJson2: any;
  stringObject2: any;
  dato :any;
  content :any;
  
  constructor(private dataService:DataService, private _sanitizer: DomSanitizer ) { 
    this.dataService.obtenerDatos().subscribe(data => {
      //console.log(data); 
      this.users = data;
      this.stringJson = JSON.stringify(this.users);
    // ConvertjSON to an object
    this.stringObject = JSON.parse(this.stringJson);
    localStorage.setItem("token","0");
    localStorage.setItem("productos",this.stringJson);
    });
    
  }

  ngOnInit(): void {
  }
   
  
  sin_promocion(){
    var aux =[] ;
  
    
    var tam =this.stringObject.productos[0].info.length;
     for (var i= 0; i < tam ; i++ ){
       if(this.stringObject.productos[0].info[i]["promocion"] == 0 ){
          aux.push(this.stringObject.productos[0].info[i]);
          
       }
     }
     return aux;
     
  }
  sin_promocion2(){
    var aux =[] ;
  
    
    var tam =this.stringObject.productos[1].info.length;
     for (var i= 0; i < tam ; i++ ){
       if(this.stringObject.productos[1].info[i]["promocion"] == 0 ){
          aux.push(this.stringObject.productos[1].info[i]);
          
       }
     }
     return aux;
     
  }
  sin_promocion3(){
    var aux =[] ;
  
    
    var tam =this.stringObject.productos[2].info.length;
     for (var i= 0; i < tam ; i++ ){
       if(this.stringObject.productos[2].info[i]["promocion"] == 0 ){
          aux.push(this.stringObject.productos[2].info[i]);
          
       }
     }
     return aux;
     
  }
 
  anadir(){
    var combo_box = document.querySelector("#categoria") as HTMLSelectElement;
    var alm =[]
    var indice=0 ;
    var aux=[];
    var cat="";
    var flag =false;
    var produc = [];
    if(combo_box.value == "carnes"){
      alm = this.sin_promocion();
      indice =0;
      cat="c";
     
      
      
    }
    if(combo_box.value == "embutidos"){
      alm = this.sin_promocion2();
      indice =1
      cat="e";
      
    
    }
    if(combo_box.value == "condimentos"){
      alm = this.sin_promocion3();
      indice =2;
      cat="s";
      
      
    }
    
    //alert(localStorage.getItem(cat));
    
    
    for ( var i = 0 ; i <(this.stringObject.productos[indice].info).length ;i++){
      if(this.stringObject.productos[indice].info[i]["promocion"] == 0){
     
        var dato = document.getElementById(this.stringObject.productos[indice].info[i]["id"]) as HTMLInputElement;
        var num = dato.valueAsNumber;
      
        if(num !=0){
            produc = [];
            produc.push(this.stringObject.productos[indice].info[i]["id"]);
            produc.push(dato.value);
            aux.push(produc);
            flag =true;
        }
       
      }
      }
      
      console.log(aux);
      localStorage.setItem(cat, aux+"");
      alert("Productos añadidos correctamente");
  }
 
  poner_categoria(){
    var combo_box = document.querySelector("#categoria") as HTMLSelectElement;
    this.content="";
    var buton = document.querySelector(".agregar") as HTMLButtonElement;
      buton.style.visibility="visible";
    if(combo_box.value == "carnes"){
      var cat = document.querySelector("#cat") as HTMLDivElement;
      cat.innerHTML =this.stringObject.productos[0].nombre;
 
      this.dato = this.sin_promocion();
      
    
        
       
    }
    if(combo_box.value == "embutidos"){
      this.content="";
      var cat = document.querySelector("#cat") as HTMLDivElement;
      cat.innerHTML =this.stringObject.productos[1].nombre;
      this.dato = this.sin_promocion2();
    
    
    }
    if(combo_box.value == "condimentos"){
      this.content="";
      var cat = document.querySelector("#cat") as HTMLDivElement;
      cat.innerHTML =this.stringObject.productos[2].nombre;
      this.dato = this.sin_promocion3(); 
    }
  }
}
