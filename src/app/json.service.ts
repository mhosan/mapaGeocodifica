import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';                             //daba error al compilar, hubo que instalar: npm install rxjs-compat
import { LatitudLongitud } from './modelo';

@Injectable({
  providedIn: 'root'
})
export class JsonService {

  constructor(private http: Http) { }
  latitudLongitud : LatitudLongitud;

  public resultado: any;

  getData(url:string){
    //return this.http.get(url).map((res: Response) => res.json());
    this.resultado = this.http.get(url).map((res: Response) => res.json());
    return this.resultado;
  }
}

