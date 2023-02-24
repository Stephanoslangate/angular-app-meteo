import { Component } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { MeteoService } from './meteo.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Page Météo';

    constructor(private service: MeteoService){
      this.recupereMeteo();
    }
    
    dataFromApi= {
      temp: 0,
      temp_max: 0,
      temp_min: 0,
      ville: '',
      country: ''
    };
  
  
  
    currentWeather={
      date: '',
      icon: '',
      cloudy: '',
      sunny: '',
      rainy: '',
      snow: ''
  
    }
  
    recupereMeteo(){
      this.service.lireAPI(this.service.ville(this.dataFromApi.ville)).subscribe((data: any)=>{
        console.log(data);
        console.log(this.dataFromApi.ville);
  
       
        this.dataFromApi.temp = data['main']['temp'] - 273.15;
        this.dataFromApi.temp_max = data['main']['temp_max'] - 273.15;
        this.dataFromApi.temp_min = data['main']['temp_min'] - 273.15;
        this.dataFromApi.ville = data['name'];
        this.dataFromApi.country = data['sys']['country'];
  
        this.currentWeather.cloudy = data['weather'][0]['main'];
        this.currentWeather.sunny = data['weather'][0]['main'];
        this.currentWeather.rainy = data['weather'][0]['main'];
        this.currentWeather.snow = data['weather'][0]['main'];
  
  
  
        //this.currentWeather.date =().add(data['timezone'],'s').format('dddd, HH:mm');
  
        if(data['weather'][0]['main'] == 'Clouds') { 
          this.currentWeather.icon  = 'cloud'  
        }
        if(data['weather'][0]['main'] == 'Clear'){ 
          this.currentWeather.icon = 'sunny'
        }
        if(data['weather'][0]['main'] == 'Rain') { 
          this.currentWeather.icon = 'rainy'
        }
        if(data['weather'][0]['main'] == 'Snow') { 
          this.currentWeather.icon = 'snow'       }
  
      }); 
    }
  
  
   
  
  }
  
