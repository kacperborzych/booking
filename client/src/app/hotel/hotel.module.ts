import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListHotelComponent } from './list-hotel/list-hotel.component';
import { CardHotelComponent } from './card-hotel/card-hotel.component';
import {HttpModule} from "@angular/http";
import {HotelService} from "./hotel.service";
import { SearchHotelComponent } from './search-hotel/search-hotel.component';
import {FormsModule} from "@angular/forms";
import { ReservationComponent } from './reservation/reservation.component';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    FormsModule
  ],
  declarations: [
    ListHotelComponent,
    CardHotelComponent,
    SearchHotelComponent,
    ReservationComponent],
  exports:[
    ListHotelComponent,
    SearchHotelComponent,
    ReservationComponent
  ],
  providers:[
    HotelService
  ],
})
export class HotelModule { }
