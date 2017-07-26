import {Component, Inject, Input, OnInit, Output} from '@angular/core';
import {Hotel} from "../hotel";
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs/Observable";
import {HotelService} from "../hotel.service";
import {EventEmitter} from "selenium-webdriver";

@Component({
  selector: 'app-list-hotel',
  templateUrl: './list-hotel.component.html',
  styleUrls: ['./list-hotel.component.css']
})
export class ListHotelComponent {



  hotels: Observable<[Hotel]>


  constructor(private hotelService: HotelService) {
    this.hotelService.getAll().subscribe(response=>console.log(response))
   // console.log(activatedRoute.snapshot.data)
  }

}
