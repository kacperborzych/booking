import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListHotelComponent } from './list-hotel/list-hotel.component';
import { CardHotelComponent } from './card-hotel/card-hotel.component';
import {HttpModule} from "@angular/http";
import {HotelService} from "./hotel.service";
import { SearchHotelComponent } from './search-hotel/search-hotel.component';

@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  declarations: [
    ListHotelComponent,
    CardHotelComponent,
    SearchHotelComponent],
  exports:[
    ListHotelComponent,
    SearchHotelComponent
  ],
  providers:[
    HotelService
  ],
})
export class HotelModule { }
