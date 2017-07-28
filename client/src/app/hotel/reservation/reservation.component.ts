import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Reservation} from "../reservation";
import {HotelService} from "../hotel.service";

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  reservation: Observable<[Reservation]>;
  reservations = new Reservation({});

  constructor(private hotelService: HotelService) { }

  ngOnInit() {
  }

  addReservation(){
    this.hotelService.addReservation(this.reservations)
      .subscribe(response=> {console.log(response)})



  }
}
