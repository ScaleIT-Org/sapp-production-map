import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { Observable } from "rxjs/Observable";

/*
  Generated class for the HttpDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HttpDataProvider {
  private _baseUrl: string;

  // constructor parameters are automatically set as class attributes
  // if a visibility parameter (here: private) is provided
  constructor(private http: HttpClient) {
    // Use environment provider to get local/non-local profile
    if (environment.dummyData) {
      this._baseUrl = environment.apiUrl; // fetch from json file
    } else {
      this._baseUrl = environment.apiUrl; // fetch from server (which also returns json)
    }
  }

  // Reactive programming: Provide an observable for the figures
  getData(path: string = "data.json"): Observable<Object[]> {
    return this.http.get<Object[]>(this._baseUrl + path);
  }

  get baseUrl(){
    return this._baseUrl;
  }

  set baseUrl(url: string){
    this._baseUrl = url;
  }
}
