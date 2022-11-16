import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  endpoint: string = "https://localhost:44325/api/christmas";
  title = 'Christmas Countdown ';
  response: any = "";
  constructor(private http: HttpClient) {
  }
  ngOnInit(): void {
    this.http.get(this.endpoint).subscribe(respo => {
      this.response = respo
      this.response=this.response.summary;
      console.log(this.response)
    })

  }
}
