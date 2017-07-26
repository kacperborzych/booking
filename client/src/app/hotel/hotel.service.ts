import { Injectable } from '@angular/core';
import {Api} from "../api";
import {Http} from "@angular/http";
import {Observable} from "rxjs/Rx";
import {Hotel} from "./hotel";


@Injectable()
export class HotelService {

  constructor(private http: Http, private api: Api) { }

  getAll(): Observable<any>{
    return this.http.get(this.api.hotels)
     // .map(response=> response.json())
      // .flatMap(hotels => hotels)
      // .map(hotel => new Hotel(hotel))
      //
  }
}
