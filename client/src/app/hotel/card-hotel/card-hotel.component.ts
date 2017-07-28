import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-card-hotel',
  templateUrl: './card-hotel.component.html',
  styleUrls: ['./card-hotel.component.css']
})
export class CardHotelComponent {



  @Input()
  hotel = {}
  @Input()
  isSelected = false
  @Output('selected')
  onSelect = new EventEmitter()

  get authorsStyle() {
    return { color: 'gray', letterSpacing: '2px' }
  }

  select() {
    this.onSelect.emit(this.hotel)

  }
}
