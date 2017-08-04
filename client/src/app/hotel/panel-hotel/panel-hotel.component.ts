import {Component, Inject, OnInit} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Hotel} from "../hotel";
import {HotelService} from "../hotel.service";
import {Subject} from "rxjs/Subject";

@Component({
  selector: 'app-panel-hotel',
  templateUrl: './panel-hotel.component.html',
  styleUrls: ['./panel-hotel.component.css']
})
export class PanelHotelComponent implements OnInit {

  selected = {}
  edited = null
  hotels: Observable<Hotel>
  private hotelSubject = new Subject()

   constructor(){}

  // constructor(@Inject('HotelService') private hotelService: HotelService) {
  //   this.hotels = this.hotelSubject.asObservable()
  // }

  ngOnInit() {
  }


  select(hotel) {
    this.selected = hotel
    this.edited = Object.assign({}, hotel)
  }
}
