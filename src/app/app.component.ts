
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
  //   this.json.getData("https://us1.locationiq.org/v1/search.php?key=7c041d46548c08&q=" + this.direccion + "&format=json").subscribe(respuesta => {
  //     console.log(respuesta);
  //     console.log(respuesta[0].lat + ", " + respuesta[0].lon);
  //     this.latLon = respuesta[0].lat + ", " + respuesta[0].lon;
  //     this.latitudLongitud = {lat : respuesta[0].lat, lon : respuesta[0].lon};
  //     this.mapita.ponerMarcador(this.latitudLongitud);
  // });

    // this.json.getData("https://us1.locationiq.org/v1/search.php?key=7c041d46548c08&q=Empire%20State%20Building&format=json").subscribe(respuesta => {
    //   console.log(respuesta);
    // });

    this.json.getData("https://geocode.xyz/" + this.direccion + "?json=1").subscribe(respuesta => {
      console.log(respuesta);
      console.log(respuesta.latt + ", " + respuesta.longt);
      this.latLon = respuesta.latt + ", " + respuesta.longt;
      this.latitudLongitud = {lat : respuesta.latt, lon : respuesta.longt}
      this.mapita.ponerMarcador(this.latitudLongitud);      
    });
  }

  mostrar(){
    alert("si");
  //   alert(lati + "," + longi);
  //   // let marcador = L.marker([ -34.921136, -57.954712 ], {
  //   //   icon: L.icon({
  //   //     iconSize: [ 40, 31 ],
  //   //     iconAnchor: [ 19, 31 ],
  //   //     iconUrl: 'assets/images/marker-green.png'
  //   //     //shadowUrl: 'assets/images/marcador01.png'
  //   //   })
  //   // }).addTo(miMapa);
  // }

}
}
//Geocodificacion desde la api de la pagina https://geocode.xyz/api. Es gratis para un limite de velocidad de hasta 1 llamada API por segundo.
//Examples: 2984 LEGUIZAMON, MARTINIANO Villa Lugano AR 
//https://geocode.xyz/51.50354,-0.12768?geoit=json
//https://geocode.xyz/Hauptstr.,+57632+Berzhausen?json=1
//avda. 7 esquina 38:       -34.906542,-57.961084
//plaza olazabal (7 y 39):  -34.90657, -57.96112 
//7 y 45:                   -34.912036, -57.954601


//poblacion:
//http://api.population.io/1.0/population/World/today-and-tomorrow/?format=json
//http://api.population.io/1.0/population/Argentina/today-and-tomorrow/?format=json

//reddit:Reddit es un sitio web de marcadores sociales y agregador de noticias donde los usuarios pueden dejar enlaces a contenidos web. 
//Otros usuarios pueden votar a favor o en contra de los enlaces, haciendo que aparezcan más o menos destacados
//https://www.reddit.com/r/all.json
//https://www.reddit.com/r/AskReddit.json
//https://www.reddit.com/r/pics.json
//https://www.reddit.com/r/worldnews.json

//peliculas:
//https://raw.githubusercontent.com/prust/wikipedia-movie-data/master/movies.json