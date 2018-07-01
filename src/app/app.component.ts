import { Component } from '@angular/core';
import { JsonService} from './json.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private json: JsonService){

  }
  ngOnInit(){
    this.json.getData("https://api.github.com/users/mralexgray/repos").subscribe(respuesta => {
        console.log(respuesta);
    });
  }
}
//https://api.github.com/users/mhosan/repos
//https://tgeo.arba.gov.ar/mesi/buscador/getPartidos.aspx
//http://api.geonames.org/citiesJSON?north=44.1&south=-9.9&east=-22.4&west=55.2&lang=de&username=demo
//https://api.github.com/users/mralexgray/repos