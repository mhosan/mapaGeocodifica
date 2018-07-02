import { Component } from '@angular/core';
import { JsonService} from './json.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  direccion: string;
  latLon: string;
  constructor(private json: JsonService){

  }
  ngOnInit(){
 
  }
  
  geocodificar(){
    this.json.getData("https://geocode.xyz/" + this.direccion + "?json=1").subscribe(respuesta => {
      console.log(respuesta);
      console.log(respuesta.latt + ", " + respuesta.longt);
      this.latLon = respuesta.latt + ", " + respuesta.longt;
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