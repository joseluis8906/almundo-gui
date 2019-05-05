import { Component, OnInit } from '@angular/core';
import { HotelsService } from 'src/app/hotels.service';
import { Hotel } from 'src/app/hotels/Hotel';

@Component({
  selector: 'app-hotels-items',
  templateUrl: './hotels-items.component.html',
  styleUrls: ['./hotels-items.component.scss']
})
export class HotelsItemsComponent implements OnInit {

  hotels: Array<Hotel> = [];

  constructor(private hotelsService: HotelsService) { }

  ngOnInit() {
    this.loadHotels();
  }

  loadHotels(): void {
    this.hotelsService.getAll().subscribe((hotels: Array<Hotel>) => {
      console.log(hotels);
      this.hotels = hotels;
    });
  }
}
