import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MeteoService {

   URLAPI = "https://api.openweathermap.org/data/2.5/weather?q=";
   URL_END = "&appid=b75ac728677647b55d36b94573d6e104";

  constructor(private http: HttpClient) { }


  ville(ville:any){
    return this.URLAPI+ville+this.URL_END;
    }

    lireAPI(url: string){
      return this.http.get(url);
    }
  

}
