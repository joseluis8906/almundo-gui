import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hotel-item',
  templateUrl: './hotel-item.component.html',
  styleUrls: ['./hotel-item.component.scss']
})
export class HotelItemComponent implements OnInit {

  @Input() image: string;
  @Input() name: string;
  @Input() stars: number;
  @Input() amenities: Array<string>;
  @Input() price: number;

  constructor() { }

  ngOnInit() {
  }

  iterations(it: number): Array<number> {
    return Array(it);
  }
}
