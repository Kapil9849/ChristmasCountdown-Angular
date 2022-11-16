import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  endpoint: string = "https://localhost:44325/api/christmas";
  title = 'Meet you on Christmas Eve in 40 days';
  response: any = "";
  cocktail:any=[];
  constructor(private http: HttpClient) {
  }
  ngOnInit(): void {
    this.http.get(this.endpoint).subscribe(respo => {
      this.response = respo
      this.response=this.response.summary;
      console.log(this.response)
    })
    this.getWeatherData();
  }

  getWeatherData()
  {
    this.http.get("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita").subscribe((response:any)=>{
      console.log(response)
      this.cocktail=response.drinks;
    })
  }
}
