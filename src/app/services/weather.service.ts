import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  // https://api.openweathermap.org/data/2.5/weather?q=londres&appid=e23e7a75d1c66109d231e7dac7331e74
  API_endpoint_base = 'https://api.openweathermap.org/data/2.5/weather?q=';
   API_key = 'e23e7a75d1c66109d231e7dac7331e74';
  constructor(private _http: HttpClient) { }

  GetWeather(city: string): Observable<any>{
    const endpoint = this.API_endpoint_base+city+"&appid="+this.API_key;
    return this._http.get(endpoint)
  }
}
