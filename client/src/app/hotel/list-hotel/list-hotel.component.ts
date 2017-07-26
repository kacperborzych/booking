import {Component, Inject, Input, OnInit, Output} from '@angular/core';
import {Hotel} from "../hotel";
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs/Observable";
import {HotelService} from "../hotel.service";
import {EventEmitter} from "selenium-webdriver";
import {Subject} from "rxjs/Subject";

@Component({
  selector: 'app-list-hotel',
  templateUrl: './list-hotel.component.html',
  styleUrls: ['./list-hotel.component.css']
})
export class ListHotelComponent {
  selected = {};
  edited = null;
  hotels = [];

  private hotelSubject = new Subject();

  constructor(private hotelService: HotelService){
  }

  ngOnInit(): void {
    this.refresh();
  }

  select(hotel){
    this.selected = hotel;
    this.edited = Object.assign({}, hotel);
    console.log(hotel)
  }

  private refresh() {
    this.hotelService.getAll()
      .subscribe(hotels => this.hotels = hotels.hotels)

}
}
