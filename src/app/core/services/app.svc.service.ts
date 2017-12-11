import { Injectable } from '@angular/core';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AppAction {

  private url: string;

  private q: string = 'Dallas,us';

  private mode: string = 'json';

  private appid: string = 'f9dbd911bc01df1d9ce563b2ba4d3209';

  private cnt: string = '7';

  constructor(
    public http: Http
  ) {
    this.url = 'http://api.openweathermap.org/data/2.5/forecast/daily';
  }

  public getWeather( q: string, mode: string, cnt: string ) {
    let query: string = '';
    query += '?units=imperial&q=' + (q ? q : this.q);
    query += '&mode=' + (mode ? mode : this.mode);
    query += '&cnt=' + (cnt ? cnt : this.cnt);
    query += '&APPID=' + (this.appid);
    return this.http['get'](this.url + query)
      .map(
        (res) => res.json()
      );
  }

  public getUser() {
    return this.http['get']('http://localhost:3000/v1/local/service/user/profile')
      .map(
        (res) => res.json()
      );
  }
}
