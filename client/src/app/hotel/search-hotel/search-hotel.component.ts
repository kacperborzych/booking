import {Component, Input, OnInit} from '@angular/core';
import {Hotel} from "../hotel";
import {Observable} from "rxjs/Observable";
import {HotelService} from "../hotel.service";


@Component({
  selector: 'app-search-hotel',
  templateUrl: './search-hotel.component.html',
  styleUrls: ['./search-hotel.component.css']
})
export class SearchHotelComponent implements OnInit {

  constructor(private hotelService: HotelService){
  }

  hotel= {};
  hotels: Observable<[Hotel]>

  ngOnInit(): void {
    this.searchHotels();
  }


  private searchHotels() {
    this.hotels = this.hotelService.getHotelByName("%25i")
      //.subscribe(response=> console.log(response))
      //.subscribe(hotels=> console.log(hotels))
  }

}
