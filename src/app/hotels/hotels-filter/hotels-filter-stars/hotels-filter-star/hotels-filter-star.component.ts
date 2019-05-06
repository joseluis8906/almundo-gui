import { Component, OnInit, Input } from '@angular/core';
import { HotelsService } from '../../../../hotels.service';

@Component({
  selector: 'app-hotels-filter-star',
  templateUrl: './hotels-filter-star.component.html',
  styleUrls: ['./hotels-filter-star.component.scss']
})
export class HotelsFilterStarComponent implements OnInit {

  @Input() label: string;
  @Input() stars: number;
  @Input() ngId: string;
  value: boolean = false;

  constructor(private hotelsService: HotelsService) {
    this.hotelsService.stars$.subscribe((stars: number) => {
      if (this.stars !== stars) {
        this.value = false;
      }
    })
  }

  ngOnInit() {
  }

  iterations(it: number): Array<number> {
    return Array(it);
  }

  onClick(evt: Event): void {
    this.hotelsService.starsSubject.next(this.stars);
  }
}
