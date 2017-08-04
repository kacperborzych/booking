import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListHotelComponent } from './list-hotel/list-hotel.component';
import { CardHotelComponent } from './card-hotel/card-hotel.component';
import {HttpModule} from "@angular/http";
import {HotelService} from "./hotel.service";
import { SearchHotelComponent } from './search-hotel/search-hotel.component';
import {FormsModule} from "@angular/forms";
import { ReservationComponent } from './reservation/reservation.component';
import {RouterModule} from "@angular/router";
import { PanelHotelComponent } from './panel-hotel/panel-hotel.component';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    RouterModule
  ],
  declarations: [
    ListHotelComponent,
    CardHotelComponent,
    SearchHotelComponent,
    ReservationComponent,
    PanelHotelComponent],
  exports:[
    ListHotelComponent,
    SearchHotelComponent,
    ReservationComponent,
    CardHotelComponent,
    PanelHotelComponent
  ],
  providers:[
    HotelService
  ],
})
export class HotelModule { }
