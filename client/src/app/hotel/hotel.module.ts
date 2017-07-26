import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListHotelComponent } from './list-hotel/list-hotel.component';
import { CardHotelComponent } from './card-hotel/card-hotel.component';
import {HttpModule} from "@angular/http";
import {HotelService} from "./hotel.service";

@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  declarations: [
    ListHotelComponent,
    CardHotelComponent],
  exports:[
    ListHotelComponent
  ],
  providers:[
    HotelService
  ],
})
export class HotelModule { }
