import { Component, OnInit, HostListener } from '@angular/core';
import { HotelsService } from '../../hotels.service';
import { Hotel } from '../../hotels/Hotel';

@Component({
  selector: 'app-hotels-items',
  templateUrl: './hotels-items.component.html',
  styleUrls: ['./hotels-items.component.scss']
})
export class HotelsItemsComponent implements OnInit {

  hotels: Array<Hotel> = [];

  constructor(private hotelsService: HotelsService) {
    this.hotelsService.name$.subscribe((name: string) => {
      this.filterByName(name);
    });

    this.hotelsService.stars$.subscribe((stars: number) => {
      this.filterByStars(stars);
    });
  }

  ngOnInit() {
    this.loadHotels();
  }

  loadHotels(): void {
    this.hotelsService.getAll().subscribe((hotels: Array<Hotel>) => {
      this.hotels = hotels;
    });
  }

  filterByName(name: string): void {
    this.hotelsService.filterByName(name).subscribe((hotels: Array<Hotel>) => {
      this.hotels = hotels;
    });
  }

  filterByStars(stars: number): void {
    this.hotelsService.filterByStars(stars).subscribe((hotels: Array<Hotel>) => {
      this.hotels = hotels;
    });
  }

  @HostListener("window:scroll", ["$event"])
  onWindowScroll(event: Event) {
    const pos = (document.documentElement.scrollTop || document.body.scrollTop) + document.documentElement.offsetHeight;
    const max = document.documentElement.scrollHeight;
    if (pos === max )   {
      this.hotelsService.paginate().subscribe((hotels: Array<Hotel>) => {
        this.hotels = this.hotels.concat(hotels);
      });
    }
  }
}
