import {Hotel} from "./hotel";
import {User} from "../security/user";

export class Reservation{

  idReservation: number;
  startDate: Date;
  endDate: Date;
  hotel: Hotel;
  user: User;


  constructor(json) {
    this.idReservation = json['idReservation'];
    this.startDate = json['startDate'];
    this.endDate = json['endDate'];
    this.hotel = json['hotel'];
    this.user = json['user'];
  }
}
