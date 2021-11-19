import { Component, OnInit, OnDestroy, OnChanges, SimpleChanges } from "@angular/core";
import { WeatherService } from "src/app/services/weather.service";


@Component({
  selector: "app-index",
  templateUrl: "index.component.html"
})
export class IndexComponent implements OnInit, OnDestroy {
  city = '';
  icon = 'https://openweathermap.org/img/wn/';
  isCollapsed = true;
  focus;
  focus1;
  focus2;
  date = new Date();
  pagination = 3;
  pagination1 = 1;
  
  constructor(private _weatherSvc: WeatherService) {}

  getWeather(){
    this._weatherSvc.GetWeather(this.city).subscribe((res:any)=> {
      
      this.icon = this.icon+res.weather[0].icon;
      console.log(this.icon)
    })
  }
  scrollToDownload(element: any) {
    element.scrollIntoView({ behavior: "smooth" });
  }
  ngOnInit() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("index-page");

    var slider = document.getElementById("sliderRegular");

    

    var slider2 = document.getElementById("sliderDouble");

    
  }
  ngOnDestroy() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("index-page");
  }
}
