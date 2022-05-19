import { Component,Inject, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-administrador-productos',
  templateUrl: './administrador-productos.component.html',
  styleUrls: ['./administrador-productos.component.css']
})
export class AdministradorProductosComponent implements OnInit {

  
  //dato:Number;
  constructor(@Inject(DOCUMENT) private document: Document) { 
    

    if(localStorage.getItem("token") !="1"){
      this.document.location.href="../index";
    }
   
  }

  ngOnInit(): void {
   
  }

}
