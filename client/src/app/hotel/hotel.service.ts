import {Api} from "../api";
import {Hotel} from "./hotel";


import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toArray'
import {Reservation} from "./reservation";

@Injectable()
export class HotelService {

  constructor(private http: Http, private api: Api) { }

  getAll(): Observable<any>{
    return this.http.get(this.api.hotels)
     .map(response=> response.json())
      .do(hotel=> console.log(hotel))

  }

  getHotelByName(name: string): Observable<[Hotel]> {
    return this.http.get(this.api.search + "?name=" + name)
      .map(responese => responese.json())
      .flatMap(hotels => hotels)
      .map(json => new Hotel(json))
      .toArray()
  }

  addReservation(reservation: Reservation):Observable<any>{
    return this.http.post(this.api.reservation, reservation)
  }
}
