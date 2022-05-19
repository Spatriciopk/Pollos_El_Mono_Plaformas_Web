import { Component, ElementRef, OnInit} from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
 
 
  constructor(private elementRef:ElementRef) { 
    localStorage.setItem("token","0");
  }
 
  ngOnInit(): void {

  }
   poner_direcion(){
    var lat= -0.328409812706374;
    var lng=-78.54970559671781;
    var combo_box = document.querySelector("#selector") as HTMLSelectElement;
    if( combo_box.value == "1"){
      lat=-0.328409812706374;
      lng=-78.54970559671781;
      
    }
    if( combo_box.value == "2"){
      lat=-0.33540752812401675;
      lng=-78.54161937730143;
       
    }
    if( combo_box.value == "3"){
      lat=-0.32790507047867795;
      lng=-78.5418814196311;
      
    }
    if( combo_box.value == "4"){
      lat=-0.3277616119154965;
      lng=-78.54055087545521;
     
    }
    if( combo_box.value == "5"){
      lat=-0.3286041778028221;
      lng=-78.53587294264217;
      
    }
      this.initMap(lat,lng);
    }
   
    initMap(l:number,ln:number) {
      var map = new google.maps.Map(document.getElementById('map') as HTMLDivElement, {
        center: {lat: l, lng: ln},
        zoom: 15
      });
      var marker = new google.maps.Marker({
        position: {lat: l, lng: ln},
        map: map,
        title: 'Pollos el Mono'
      });
    }

}
