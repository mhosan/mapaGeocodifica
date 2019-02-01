import { Component, OnInit } from '@angular/core';
import { JsonService} from '../json.service';
import { LatitudLongitud } from '../modelo';
 
declare let L;
var miMapa;
declare let contextmenu;

@Component({
  selector: 'app-mapin',
  templateUrl: './mapin.component.html',
  styleUrls: ['./mapin.component.css']
})
export class MapinComponent implements OnInit {
  public latitudLongitud : LatitudLongitud;
  constructor(private json: JsonService){ 
  }
  ngOnInit() {
    //var miMapa = L.map('map').setView([ -34.921136, -57.954712], 13);
    let osm1 = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
      '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
      'Imagery © <a href="http://mapbox.com">Mapbox</a>',
      id: 'mapbox.streets'});
    
    let openmap = L.tileLayer("http://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}", {
      attribution: 'terms and feedback'
    });

    let osm2 = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {maxZoom: 20});
    
    let googleMaps = L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
    maxZoom: 20,
    subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
    detectRetina: true
    });

    let googleHybrid = L.tileLayer('http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}', {
    maxZoom: 20,
    subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
    detectRetina: true
    });

    miMapa = L.map("map", {
      contextmenu: true,
      contextmenuWidth: 180,
      contextmenuItems: [{
        text: "Ver las coordenadas",
        callback: this.verCoordenadas,
        icon: 'assets/images/coordenadas.png'
      },{
        text: "Centrar aqui",
        callback: this.centrarMapa,
        icon: 'assets/images/banderita.png'
      },'-',
        {
        text: "Acercar",
        callback: this.acercar,
        icon: 'assets/images/zoom-in.png'
      },{
        text: "Alejar",
        callback: this.alejar,
        icon: 'assets/images/zoom-out.png'
      }],
      center: [-34.921136, -57.954712],
      zoom: 13,
      zoomControl: false,
      maxZoom: 20 
    }).addLayer(googleHybrid);

    let marcador = L.marker([ -34.921136, -57.954712 ], {
      icon: L.icon({
        iconSize: [ 40, 31 ],
        iconAnchor: [ 19, 31 ],
        iconUrl: 'assets/images/marker-green.png'
        //shadowUrl: 'assets/images/marcador01.png'
      })
    }).addTo(miMapa);
    // miMapa.on('click', this.onMapClick)
  
  }
  // onMapClick(e) {
  //   let popup = L.popup();
  //   popup
  //     .setLatLng(e.latlng)
  //     .setContent("<h4>Coordenadas (por ahora)</h4>" + "<hr><br/>" + e.latlng)
  //     .openOn(miMapa);
  // }
  verCoordenadas (e) {
    // let popupCoordenadas = L.popup();
    // popupCoordenadas
    //   .setLatLng(e.latlng)
    //   .setContent("Coordenadas: " + e.latlng)
    //   .openOn(miMapa);
  }
  centrarMapa (e){
    miMapa.panTo(e.latlng);
  }
  acercar(e){
    miMapa.zoomIn();
  }
  alejar(e){
    miMapa.zoomOut();
  }

  ponerMarcador(objetoLatLong : LatitudLongitud){
    //alert("Estoy en mapin, lat: " + objetoLatLong.lat + ", long: " + objetoLatLong.lon);
    let lasCoords = [];
    lasCoords[0] = objetoLatLong.lat;
    lasCoords[1] = objetoLatLong.lon;
    miMapa.setView(lasCoords, 17);
    let marca = L.marker(lasCoords, {
      icon: L.icon({
        iconSize: [ 40, 31 ],
        iconAnchor: [ 19, 31 ],
        iconUrl: 'assets/images/marker-green.png'
        //shadowUrl: 'assets/images/marcador01.png'
      })
    }).addTo(miMapa);
  }
}
