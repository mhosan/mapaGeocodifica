import { Component, ViewChild } from '@angular/core';
import { JsonService} from './json.service';
import { LatitudLongitud } from './modelo';
import { MapinComponent } from './mapin/mapin.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})

export class AppComponent {
  direccion: string;
  public latLon: string = "";
  public latitudLongitud : LatitudLongitud;
  @ViewChild(MapinComponent) mapita: MapinComponent;

  constructor(private json: JsonService){}
  ngOnInit(){}
  //comentario

  geocodificar(){
  //locationiq, https://locationiq.com:
  //Your Key is 7c041d46548c08
     this.json.getData("https://us1.locationiq.org/v1/search.php?key=7c041d46548c08&q=" + this.direccion + "&format=json").subscribe(respuesta => {
       //console.log(respuesta);
       console.log(respuesta[0].lat + ", " + respuesta[0].lon);
       this.latLon = respuesta[0].lat + ", " + respuesta[0].lon;
       this.latitudLongitud = {lat : respuesta[0].lat, lon : respuesta[0].lon};
       this.mapita.ponerMarcador(this.latitudLongitud);
   });
  }
}
//Geocodificacion desde la api de la pagina https://geocode.xyz/api. Es gratis para un limite de velocidad de hasta 1 llamada API por segundo.
//Examples: 2984 LEGUIZAMON, MARTINIANO Villa Lugano AR 
//https://geocode.xyz/51.50354,-0.12768?geoit=json
//https://geocode.xyz/Hauptstr.,+57632+Berzhausen?json=1
//avda. 7 esquina 38:       -34.906542,-57.961084
//plaza olazabal (7 y 39):  -34.90657, -57.96112 
//7 y 45:                   -34.912036, -57.954601
